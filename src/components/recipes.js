import React from "react";

const recipes = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Creamy and flavorful chicken curry",
      ingredients: [
        "500g boneless chicken",
        "1 cup plain yogurt",
        "2 tablespoons butter",
        "1 onion, finely chopped",
        "3 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "2 teaspoons garam masala",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 cup tomato puree",
        "1/2 cup heavy cream",
        "Salt to taste",
        "Fresh cilantro, for garnish"
      ],
      instructions: [
        "Marinate the chicken in yogurt, ginger paste, and a pinch of salt. Let it sit for 30 minutes.",
        "In a large skillet, melt the butter and sauté the chopped onion, garlic, and spices until fragrant.",
        "Add the marinated chicken and cook until it turns white and is almost cooked through.",
        "Stir in the tomato puree and simmer for 10-15 minutes, or until the chicken is fully cooked.",
        "Stir in the heavy cream and season with salt to taste.",
        "Garnish with fresh cilantro and serve hot with naan or rice."
      ]
    },
    {
      id: 2,
      name: "Palak Paneer",
      description: "Creamy spinach curry with paneer (Indian cottage cheese)",
      ingredients: [
        "200g paneer, cubed",
        "4 cups fresh spinach leaves",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "1/2 cup heavy cream",
        "2 tablespoons ghee (clarified butter)",
        "Salt to taste"
      ],
      instructions: [
        "Blanch the spinach leaves in boiling water for 2 minutes, then transfer to ice water. Drain and blend into a smooth paste.",
        "In a large skillet, heat ghee and sauté the cumin seeds until they splutter.",
        "Add the chopped onion and green chilies, and cook until the onion turns golden brown.",
        "Stir in the tomato puree, turmeric powder, and garam masala. Cook until the oil separates from the mixture.",
        "Add the spinach paste and cook for 5 minutes.",
        "Stir in the heavy cream and season with salt.",
        "Add the paneer cubes and simmer for another 5 minutes.",
        "Serve hot with naan or rice."
      ]
    },
    {
      id: 3,
      name: "Biryani",
      description: "Flavorful rice dish with meat or vegetables",
      ingredients: [
        "2 cups basmati rice",
        "500g chicken or vegetables",
        "1 onion, thinly sliced",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "2 teaspoons biryani masala",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup plain yogurt",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped cilantro",
        "4 cups water",
        "4 tablespoons ghee (clarified butter)",
        "Salt to taste"
      ],
      instructions: [
        "Wash the basmati rice and soak it in water for 30 minutes. Drain and set aside.",
        "In a large skillet, heat ghee and sauté the sliced onion, garlic, and ginger paste until golden brown.",
        "Add the chicken or vegetables and cook until they are almost done.",
        "Stir in the biryani masala, turmeric powder, and red chili powder. Cook for a few minutes.",
        "Add the soaked rice, plain yogurt, mint leaves, cilantro, and water. Season with salt.",
        "Bring the mixture to a boil, then reduce the heat, cover, and simmer for 15-20 minutes, or until the rice is cooked and the flavors are well combined.",
        "Remove from heat and let it rest for 5 minutes before fluffing the rice with a fork.",
        "Serve hot with raita or salan (curry)."
      ]
    },
    {
      id: 4,
      name: "Chole Bhature",
      description: "Spiced chickpeas curry with fried bread",
      ingredients: [
        "1 cup dried chickpeas, soaked overnight",
        "2 onions, finely chopped",
        "2 tomatoes, pureed",
        "2 green chilies, chopped",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/4 cup chopped cilantro",
        "Oil for frying",
        "Salt to taste"
      ],
      instructions: [
        "Boil the soaked chickpeas until tender. Drain and set aside.",
        "In a large skillet, heat oil and sauté the cumin seeds until they splutter.",
        "Add the chopped onions, green chilies, garlic, and ginger paste. Cook until the onions turn golden brown.",
        "Stir in the tomato puree, coriander powder, turmeric powder, red chili powder, and garam masala. Cook until the oil separates from the mixture.",
        "Add the boiled chickpeas and simmer for 10 minutes.",
        "Garnish with chopped cilantro and serve hot with bhature (fried bread)."
      ]
    },
    {
      id: 5,
      name: "Samosa",
      description: "Crispy pastry stuffed with spiced potatoes and peas",
      ingredients: [
        "1 cup all-purpose flour",
        "1/4 cup vegetable oil",
        "1/4 teaspoon ajwain seeds",
        "1/2 teaspoon salt",
        "1/4 cup water",
        "2 potatoes, boiled and mashed",
        "1/2 cup peas",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "1/4 teaspoon turmeric powder",
        "1/4 cup chopped cilantro",
        "Oil for frying"
      ],
      instructions: [
        "In a mixing bowl, combine the flour, vegetable oil, ajwain seeds, and salt. Mix well.",
        "Add water gradually and knead into a firm dough. Cover and set aside for 30 minutes.",
        "In a large skillet, heat oil and sauté the cumin seeds until they splutter.",
        "Add the chopped onions, green chilies, and peas. Cook until the onions turn golden brown.",
        "Stir in the mashed potatoes and spices. Mix well and cook for 5 minutes.",
        "Add the chopped cilantro and mix well.",
        "Divide the dough into small balls and roll each one into a thin circle.",
        "Cut the circle into two halves. Take one half and form a cone by joining the edges together with a little water.",
        "Fill the cone with the potato mixture and seal the open end with water.",
        "Deep fry the samosas until golden brown and crispy.",
        "Serve hot with mint chutney or tamarind chutney."
      ]
    },
    {
      id: 6,
      name: "Aloo Gobi",
      description: "Spicy cauliflower and potato curry",
      ingredients: [
        "1 cauliflower, cut into florets",
        "2 potatoes, peeled and cubed",
        "1 onion, finely chopped",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "2 tomatoes, chopped",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/4 cup chopped cilantro",
        "4 tablespoons oil",
        "Salt to taste"
      ],
      instructions: [
        "In a large skillet, heat oil and sauté the cumin seeds until they splutter.",
        "Add the chopped onions, green chilies, garlic, and ginger paste. Cook until the onions turn golden brown.",
        "Stir in the chopped tomatoes and cook until they turn soft.",
        "Add the cauliflower florets, cubed potatoes, and spices. Mix well and cook for 10 minutes.",
        "Add 1/2 cup of water and simmer until the vegetables are cooked and the curry thickens.",
        "Garnish with chopped cilantro and serve hot with naan or rice."
      ]
    },
    {
      id: 7,
      name: "Chicken Tikka Masala",
      description: "Creamy and spicy chicken curry",
      ingredients: [
        "500g boneless chicken, cut into cubes",
        "1 cup plain yogurt",
        "1 onion, finely chopped",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "2 teaspoons garam masala",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 cup tomato puree",
        "1/2 cup heavy cream",
        "4 tablespoons oil",
        "Salt to taste",
        "Fresh cilantro, for garnish"
      ],
      instructions: [
        "Marinate the chicken in yogurt, ginger paste, and a pinch of salt. Let it sit for 30 minutes.",
        "In a large skillet, heat oil and sauté the chopped onion, garlic, and spices until fragrant.",
        "Add the marinated chicken and cook until it turns white and is almost cooked through.",
        "Stir in the tomato puree and simmer for 10-15 minutes, or until the chicken is fully cooked.",
        "Stir in the heavy cream and season with salt to taste.",
        "Garnish with fresh cilantro and serve hot with naan or rice."
      ]
    },
    {
      id: 8,
      name: "Chana Masala",
      description: "Spicy chickpeas curry",
      ingredients: [
        "1 cup dried chickpeas, soaked overnight",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "2 green chilies, chopped",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/4 cup chopped cilantro",
        "4 tablespoons oil",
        "Salt to taste"
      ],
      instructions: [
        "Boil the soaked chickpeas until tender. Drain and set aside.",
        "In a large skillet, heat oil and sauté the cumin seeds until they splutter.",
        "Add the chopped onions, green chilies, garlic, and ginger paste. Cook until the onions turn golden brown.",
        "Stir in the tomato puree, coriander powder, turmeric powder, red chili powder, and garam masala. Cook until the oil separates from the mixture.",
        "Add the boiled chickpeas and simmer for 10 minutes.",
        "Garnish with chopped cilantro and serve hot with naan or rice."
      ]
    },
    {
      id: 9,
      name: "Dal Makhani",
      description: "Creamy lentil curry",
      ingredients: [
        "1 cup whole black lentils, soaked overnight",
        "1/2 cup kidney beans, soaked overnight",
        "1 onion, finely chopped",
        "4 cloves of garlic, minced",
        "1 teaspoon ginger paste",
        "2 tomatoes, pureed",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/4 cup chopped cilantro",
        "2 tablespoons butter",
        "1/2 cup heavy cream",
        "Salt to taste"
      ],
      instructions: [
        "Wash and soak the urad dal and rajma overnight. Drain the water.",
        "In a pressure cooker, add the soaked dal and rajma along with fresh water, salt, and turmeric powder.",
        "Pressure cook for about 8-10 whistles or until the dal and rajma are soft and well cooked.",
        "In a separate pan, heat butter and oil. Add cumin seeds and let them splutter.",
        "Add chopped onions and cook until they turn golden brown.",
        "Stir in ginger-garlic paste and sauté for a minute.",
        "Add chopped tomatoes, red chili powder, garam masala, and kasuri methi. Cook until the tomatoes are soft and well cooked.",
        "Mash the cooked dal and rajma slightly with the back of a spoon and add it to the tomato mixture.",
        "Mix well and simmer for about 20-30 minutes, stirring occasionally.",
        "Add cream and cook for an additional 5 minutes.",
        "Garnish with fresh cilantro and serve hot with rice or naan."
      ],
    },
  ]

export default recipes;