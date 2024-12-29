// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Crowdfunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        bool claimed;
        mapping(address => uint256) contributions;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    event CampaignCreated(uint256 indexed campaignId, address indexed owner);
    event ContributionMade(uint256 indexed campaignId, address indexed contributor, uint256 amount);
    event FundsClaimed(uint256 indexed campaignId, address indexed owner, uint256 amount);

    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline
    ) public returns (uint256) {
        require(_deadline > block.timestamp, "Deadline must be in future");

        Campaign storage campaign = campaigns[numberOfCampaigns];
        campaign.owner = msg.sender;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.claimed = false;

        emit CampaignCreated(numberOfCampaigns, msg.sender);
        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }

    function contributeToCampaign(uint256 _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp < campaign.deadline, "Campaign ended");
        
        campaign.contributions[msg.sender] += msg.value;
        campaign.amountCollected += msg.value;
        
        emit ContributionMade(_campaignId, msg.sender, msg.value);
    }

    function claimFunds(uint256 _campaignId) public {
        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.owner, "Only owner can claim");
        require(!campaign.claimed, "Already claimed");
        require(block.timestamp > campaign.deadline, "Campaign still active");
        
        uint256 amount = campaign.amountCollected;
        campaign.claimed = true;
        payable(campaign.owner).transfer(amount);
        
        emit FundsClaimed(_campaignId, campaign.owner, amount);
    }

    function getCampaign(uint256 _campaignId) public view returns (
        address owner,
        string memory title,
        string memory description,
        uint256 target,
        uint256 deadline,
        uint256 amountCollected,
        bool claimed
    ) {
        Campaign storage campaign = campaigns[_campaignId];
        return (
            campaign.owner,
            campaign.title,
            campaign.description,
            campaign.target,
            campaign.deadline,
            campaign.amountCollected,
            campaign.claimed
        );
    }
}