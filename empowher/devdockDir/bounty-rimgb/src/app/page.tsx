"use client";
import { useState, useEffect } from 'react';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CROWDFUNDING_ABI, CROWDFUNDING_ADDRESS } from '../constants';

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);
  const { address } = useAccount();
  
  const } = useContractRead({
    address: CROWDFUNDING_ADDRESS,
    abi: CROWDFUNDING_ABI,
    functionName: 'numberOfCampaigns',
  });

  const { write: createCampaign } = useContractWrite({
    address: CROWDFUNDING_ADDRESS,
    abi: CROWDFUNDING_ABI,
    functionName: 'createCampaign',
  });

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    createCampaign({
      args: [
        formData.get('title'),
        formData.get('description'),
        parseEther(formData.get('target') as string),
        Math.floor(new Date(formData.get('deadline') as string).getTime() / 1000)
      ],
    });
  };

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Crowdfunding DApp</h1>
        <ConnectButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
          <form onSubmit={handleCreateCampaign}>
            <div className="space-y-4">
              <input
                name="title"
                type="text"
                placeholder="Campaign Title"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Campaign Description"
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="target"
                type="number"
                step="0.01"
                placeholder="Target Amount (ETH)"
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="deadline"
                type="datetime-local"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Active Campaigns</h2>
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="p-4 border rounded">
                {/* Campaign details */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}