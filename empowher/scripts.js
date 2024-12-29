function generateDiet() {
  
    const queryParams = new URLSearchParams(window.location.search);
    const weight = queryParams.get('weight');
    const height = queryParams.get('height');
    const goal = queryParams.get('goal');
    console.log('Weight: ${weight}, Height: ${height}, Goal: ${goal}');

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let dietPlan = `Your BMI is ${bmi}.\n`;

    if (goal === "lose") {
        dietPlan += `Breakfast
1.Chia Pudding with Almond Milk: 2 tbsp chia seeds, 1 cup almond milk, topped with mixed berries (blueberries, strawberries).

2.Tofu Scramble: Tofu, spinach, tomatoes, onions, and turmeric, with a slice of whole-grain toast or avocado.

3.Overnight Oats: Made with almond milk, chia seeds, and mixed berries.

4.Smoothie: 1/2 banana, 1/2 cup spinach, 1 tbsp peanut butter, 1 scoop plant-based protein powder, almond milk.

5.Moong Dal Chilla: Grind moong dal into a batter, add spices, and cook as thin pancakes.Serve with green chutney or yogurt.

6.Oats Upma: Sauté oats with veggies and spices for a savory dish.

7.Vegetable Paratha: Stuff paratha with the vegetable mixture and cook with minimal oil.

Mid-Morning Snack
1. A small handful of almonds or walnuts.
2. 1 apple or pear with a handful of sunflower seeds.
3. A small handful of mixed nuts (almonds, cashews, pistachios).
4. 1 orange or grapefruit.

Lunch 
1. Chickpea & Spinach Curry (Chole Saag)
    * Chickpeas, spinach, onions, tomatoes, and spices.
    * Serve with 1 whole wheat roti or 1/2 cup brown rice.

2. Lentil Soup (Dal Tadka)
    *Toor dal, onions, tomatoes, and spices.
    *Serve with 1 small quinoa or brown rice, or roti.

    3. Vegetable & Paneer Stir-Fry
    * Paneer, mixed veggies (carrot, beans, capsicum), and spices.
    * Serve with roti or brown rice.

4. Kadhi Pakora
    * Gram flour fritters in yogurt-based curry.
    * Serve with brown rice or roti.

5. Quinoa Pulao with Mixed Veggies
    * Quinoa, mixed veggies, cumin, and spices.
    * Serve with yogurt or salad.
    
6. Moong Dal & Vegetable Khichdi
    * Moong dal, rice, mixed veggies, and spices.
    * Serve with yogurt and salad.
    
7. Palak & Methi Paratha
    * Spinach, fenugreek, and whole wheat flour.
    * Serve with yogurt or salad.

Afternoon Snack
1.Carrot and cucumber sticks with hummus.
2.Celery sticks with peanut butter.
3.A small handful of mixed nuts (almonds, walnuts, cashews).
4.Handful of pumpkin seeds or sunflower seeds.

Dinner 
1.Lentil Soup: Homemade lentil soup with spinach, garlic, and tomatoes. Serve with a roasted sweet potato.

2.Tofu and Veggie Stir-Fry: Tofu, broccoli, bell peppers, mushrooms, and zucchini in a soy sauce and ginger dressing. Serve with brown rice or quinoa.

3.Chickpea Curry: Chickpeas cooked in coconut milk with tomatoes, spinach, and spices. Serve with quinoa or brown rice.

4.Stuffed Bell Peppers: Bell peppers stuffed with quinoa, black beans, tomatoes, onions, and spices. Serve with a side of steamed broccoli.

`;
    } else if (goal === "maintain") {
      dietPlan+=`Breakfast 
1. Chia Pudding with Almond Milk: 2 tbsp chia seeds, 1 cup almond milk, topped with sliced mango or kiwi.

2. Vegetable Poha: Flattened rice sautéed with peas, carrots, turmeric, mustard seeds, and curry leaves.

3. Smoothie Bowl: Blend frozen bananas, spinach, and almond milk, then top with granola, chia seeds, and fresh berries.

4. Besan Chilla: Chickpea flour pancakes with grated zucchini and carrots, served with mint chutney.

5. Spinach & Cheese Whole-Grain Sandwich: Whole-grain bread, spinach, and low-fat cheese grilled together.

6. Ragi Porridge: Ragi flour cooked with almond milk, topped with crushed nuts and dates.

7. Idli with Sambar: Steamed rice cakes served with a lentil-based vegetable stew.

Mid-Morning Snacks
1. A handful of roasted fox nuts (makhana) spiced with black pepper and turmeric.

2. 1 bowl of mixed berries with 1 tbsp sunflower seeds.

3. 1 small bowl of roasted peanuts or chickpeas.

4. A pear or guava with a sprinkle of black salt.

Lunch 
1. Rajma (Kidney Bean) Curry: Kidney beans cooked in a tomato-onion gravy, served with 1 multigrain roti or 1/2 cup brown rice.

2. Vegetable Coconut Curry: Mixed veggies (zucchini, carrots, and bell peppers) in a light coconut milk curry, served with quinoa.

3. Baingan Bharta with Roti: Mashed roasted eggplant cooked with spices and onions, paired with whole-grain roti.

4. Stuffed Capsicum: Bell peppers stuffed with paneer, quinoa, and spices, baked and served with yogurt.

5. Vegetable Dal Soup: Yellow lentils cooked with spinach, carrots, and turmeric, served with steamed brown rice.

6.Mixed Sprouts Salad: Boiled sprouts with cucumbers, tomatoes, and lemon dressing, served with a small roti.

7. Methi Thepla with Curd: Fenugreek-infused flatbreads served with plain yogurt and a side of mango pickle.


Afternoon Snack
1. A small bowl of homemade bhel puri: puffed rice, onions, tomatoes, and tamarind chutney.

2. 1 glass of buttermilk with roasted cumin and mint leaves.

3.Carrot and beetroot sticks with guacamole.

4. 1 small bowl of yogurt with a tsp of flaxseeds or chia seeds.

Dinner 
1. Vegetable Lentil Stew: Lentils cooked with sweet potatoes, carrots, and spinach, served with a side of roasted cauliflower.

2. Vegetable & Paneer Kebabs: Grilled paneer cubes and mixed veggies, served with mint chutney and a small quinoa salad.

3. Tofu Bhurji: Crumbled tofu sautéed with tomatoes, onions, and capsicum, served with whole-grain roti.

4. Vegetable Soup with Whole-Grain Toast: A hearty soup made with zucchini, broccoli, and carrots, served with multigrain toast.

5. Rajma & Quinoa Bowl: Kidney beans, sautéed veggies, and a sprinkle of lime juice, served over quinoa.

6. Palak Paneer with Roti: Spinach and paneer curry, served with whole-grain roti and a side of cucumber salad.

7. Stuffed Zucchini Boats: Zucchini stuffed with a mix of lentils, quinoa, and spices, baked and served with a side of steamed broccoli.
`;
    } 
    else if (goal === "gain") {
        dietPlan += `Breakfast 
1. Scrambled Eggs with Avocado Toast: 3 scrambled eggs cooked with olive oil, served with 1 slice of whole-grain toast topped with mashed avocado.

2. Chicken Sausage Omelet: 2 eggs, diced chicken sausage, spinach, and bell peppers cooked as an omelet, served with a side of fresh fruit (banana or apple).

3. Greek Yogurt Parfait with Honey: Layer Greek yogurt with granola, mixed nuts, and a drizzle of honey.

4. Protein Pancakes with Peanut Butter: Whole-wheat pancakes topped with peanut butter and 2 boiled eggs on the side.

5. Smoked Salmon Bread: Whole-grain bread topped with cream cheese, smoked salmon, and sliced cucumber.

6. Egg and Chicken Salad Wrap: Whole-wheat wrap filled with boiled eggs, shredded chicken, lettuce, and a dollop of Greek yogurt dressing.

7. Oats with Milk and Nuts: Cook oats in milk, top with chopped almonds, walnuts, and dried fruits, served with 1 boiled egg.

Mid-Morning Snacks
1. A handful of mixed nuts and a boiled egg.
2. 1 cup of full-fat milk with a banana or protein powder.
3. 1 small bowl of chicken or tuna salad.
4. 1 slice of whole-grain bread topped with shredded chicken.

Lunch 
1.Grilled Chicken with Quinoa: Grilled chicken breast, 1 cup of quinoa, and a side of sautéed spinach and carrots.

2.Fish Curry with Rice: White fish (tilapia or cod) cooked in a coconut milk-based curry, served with 1 cup of steamed rice.

3. Chicken Stir-Fry: Chicken strips stir-fried with broccoli, bell peppers, and soy sauce, served with 1/2 cup brown rice or noodles.

4. Lamb Curry with Roti: Tender lamb cooked in a tomato-based curry, served with 2 whole-wheat rotis and a cucumber salad.

5. Egg and Shrimp Fried Rice: Fried rice with scrambled eggs, shrimp, peas, and carrots, cooked in minimal oil.

6. Grilled Fish with Vegetables: Grilled salmon or mackerel served with roasted sweet potatoes and green beans.

7. Chicken and Lentil Stew: Chicken pieces and lentils slow-cooked with carrots, celery, and onions, served with a side of garlic bread.

Afternoon Snacks
1. Grilled chicken skewers with hummus dip.
2. 1 small can of tuna mixed with olive oil and crackers.
3. Hard-boiled eggs with a sprinkle of black pepper and chili flakes.
4. 1 cup of full-fat yogurt with chopped dates or raisins.

Dinner 
1.Grilled Salmon with Mashed Potatoes:  Grilled salmon fillet with a side of mashed potatoes and steamed green beans.

2.Butter Chicken with Rice: Boneless chicken in a creamy tomato-based sauce, served with 1 cup of steamed rice and a cucumber salad.

3.Shrimp and Vegetable Stir-Fry: Shrimp stir-fried with zucchini, carrots, and mushrooms, served with whole-grain pasta.

4. Chicken Biryani: Fragrant rice cooked with marinated chicken, spices, and a side of raita.

5. Roasted Duck with Sweet Potatoes: Roasted duck breast with a side of baked sweet potatoes and sautéed asparagus.

6. Egg and Chicken Curry: Hard-boiled eggs and chicken cooked in a spiced gravy, served with brown rice or millet.

7. Fish Tacos: Grilled fish, shredded cabbage, and avocado in a soft taco shell, served with a side of salsa.

Weight Gain Tips
Increase Caloric Intake Gradually: Add extra calories with healthy fats like avocados, nuts, and olive oil.
Focus on Protein: Incorporate lean meats, eggs, and fish to build and maintain muscle mass.
Choose Whole Grains: Opt for brown rice, quinoa, and whole-wheat bread for sustained energy.
Stay Consistent: Eat every 2-3 hours to ensure a constant supply of calories and nutrients.` ;
} else if (goal === "bone") {
        dietPlan += `Breakfast Options:

1.Ragi Porridge: Ragi (finger millet) cooked with almond milk, topped with chia seeds and crushed almonds.

2.Chia Pudding with Fruits : Chia seeds soaked in fortified almond milk, topped with sliced kiwi and strawberries.

3.Spinach & Feta Whole-Grain Wrap :Tortilla filled with sautéed spinach and crumbled feta cheese.

4.Greek Yogurt with Granola :Greek yogurt mixed with granola, pumpkin seeds, and a drizzle of honey.

5.Vegetable Upma : Semolina cooked with carrots, peas, curry leaves, and sesame seeds.

6.Besan Chilla with Spinach :Chickpea flour pancakes with chopped spinach, served with mint chutney.

7.Vegetable Paratha with Yogurt :Whole-grain paratha stuffed with spinach and paneer, served with plain yogurt.

Mid-Morning Snacks
Soy Milk with Almonds : 1 cup soy milk and a handful of almonds.
Boiled Edamame : A small bowl of boiled edamame sprinkled with sea salt.
Dried Figs and Walnuts : A small handful of dried figs and walnuts.
Fresh Citrus Fruit : 1 small orange or grapefruit for vitamin C.

Lunch 
1.Spinach and Lentil Curry: Spinach cooked with yellow lentils, served with multigrain roti.

2.Vegetable & Paneer Stir-Fry: Paneer cubes sautéed with broccoli, bell peppers, and zucchini, served with quinoa.

3.Mixed Bean Salad: Kidney beans, chickpeas, and black beans with cucumbers and olive oil.

4.Cauliflower & Green Pea Curry: Cauliflower and peas in tomato-based curry, served with steamed brown rice.

5.Moong Dal Khichdi with Vegetables: Moong dal and rice cooked with spinach, carrots, and turmeric, served with yogurt.

6.Vegetable Coconut Curry: Mixed veggies cooked in coconut milk, served with quinoa.

7.Palak Paneer with Millet Roti: Spinach puree cooked with paneer cubes, served with millet roti.

Afternoon Snacks
Turmeric Milk: A glass of warm turmeric milk with a pinch of black pepper.
Almond Butter Toast: Multigrain bread topped with almond butter or tahini.
Roasted Chickpeas: A handful of roasted chickpeas or fox nuts (makhana).
Sesame Seed Ladoos: A small bowl of sesame seed ladoos for calcium.

Dinner Options:
1. Vegetable & Lentil Stew: Lentils cooked with carrots, celery, and spinach, served with whole-grain bread.

2. Quinoa and Tofu Bowl: Quinoa topped with grilled tofu, steamed broccoli, and tahini dressing.

3. Stuffed Bell Peppers: Bell peppers stuffed with quinoa, spinach, and feta cheese, served with a salad.

4.Vegetable Soup with Toast: Creamy broccoli and carrot soup with whole-grain toast.

5.Paneer Tikka with Millet Roti: Grilled paneer cubes marinated in yogurt, served with millet roti.

6.Baked Sweet Potato with Yogurt: Sweet potato topped with plain yogurt, chives, and sesame seeds.

7. Vegetable Pulao with Yogurt: Brown rice cooked with mixed veggies, served with yogurt.

`;
    } else if (goal === "menopause") {
        dietPlan += `Breakfast 
1. Scrambled Eggs with Spinach: 2 eggs scrambled with spinach and olive oil, served with a slice of whole-grain toast.

2. Greek Yogurt with Honey and Walnuts: Greek yogurt topped with a drizzle of honey and crushed walnuts.

3. Smoked Salmon and Avocado Toast: Whole-grain toast topped with smoked salmon, avocado, and a sprinkle of sesame seeds.

4. Oatmeal with Almond Butter: Cooked oats with almond butter, chia seeds, and sliced banana.

5. Chicken Sausage Omelet: Omelet made with chicken sausage, onions, and bell peppers, served with fresh fruit.

6. Breakfast Burrito: Whole-wheat wrap filled with scrambled eggs, grilled chicken, and avocado.

7. Tuna Salad on Toast: Canned tuna mixed with Greek yogurt, served on whole-grain toast.

Mid-Morning Snacks
Hard-Boiled Eggs with Avocado Slices 
Sardines on Whole-Grain Crackers 
Mixed Nuts with a Boiled Egg 
Cucumber and Tuna Salad 

Lunch 
1. Grilled Salmon with Quinoa: Grilled salmon fillet served with 1 cup of quinoa and sautéed broccoli.

2. Chicken and Spinach Curry: Boneless chicken cooked with spinach in light spices, served with 1 roti or brown rice.

3. Egg and Shrimp Fried Rice: Brown rice stir-fried with shrimp, scrambled eggs, and mixed veggies.

4. Lemon Garlic Fish with Sweet Potato: White fish like cod or tilapia cooked with lemon and garlic, served with baked sweet potato.

5. Chicken Caesar Salad: Grilled chicken breast on a bed of romaine lettuce with olive oil dressing and a sprinkle of Parmesan.

6. Turkey and Vegetable Stir-Fry: Ground turkey stir-fried with zucchini, bell peppers, and mushrooms, served with whole-grain pasta.

7.Mackerel with Steamed Veggies : Grilled mackerel with a side of steamed green beans and carrots.

Afternoon Snacks
Cottage Cheese with Pineapple
Turkey Slices with Hummus 
Grilled Prawns 
Boiled Egg and Spinach Salad 

Dinner 
1. Grilled Chicken and Roasted Veggies: Chicken breast with roasted zucchini, bell peppers, and sweet potatoes.

2. Salmon in Coconut Curry: Salmon cooked in coconut milk with turmeric and spices, served with brown rice.

3. Stuffed Bell Peppers with Turkey: Bell peppers stuffed with ground turkey, quinoa, and spices, baked and served with a side salad.

4. Shrimp and Broccoli Stir-Fry: Shrimp stir-fried with broccoli, garlic, and sesame oil, served with steamed rice.

5. Lamb Stew with Vegetables: Lamb slow-cooked with carrots, celery, and potatoes, served with whole-grain bread.

6. Egg Curry with Rice: Hard-boiled eggs cooked in a tomato-based curry, served with brown rice.

7. Grilled Fish with Mashed Cauliflower:  Grilled white fish served with mashed cauliflower and steamed asparagus
`;
    }

    document.getElementById('diet-plan').innerText = dietPlan;
    
}