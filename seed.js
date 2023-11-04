
const MenuItem = require('./models/menuItemModel'); 



const foodItems = [
  {
    name: "Classic Burger",
    description: "A juicy beef patty with lettuce, tomato, and cheese on a fresh bun.",
    price: 12.99,
    category: "Burgers",
  },
  {
    name: "Veggie Burger",
    description: "A delicious vegetable patty with lettuce, tomato, and cheese on a fresh bun.",
    price: 11.99,
    category: "Burgers",
  },
  {
            name: "Chicken Caesar Salad",
            description: "Grilled chicken breast atop fresh romaine lettuce, with parmesan cheese and croutons.",
            price: 14.99,
            category: "Salads"
    },
        {
            name: "Garden Salad",
            description: "A medley of fresh vegetables served on a bed of crisp lettuce.",
            price: 9.99,
            category: "Salads"
        },
        {
            name: "Margherita Pizza",
            description: "Classic pizza with fresh tomato sauce, mozzarella cheese, and basil.",
            price: 13.99,
            category: "Pizzas"
        },
        {
            name: "Pepperoni Pizza",
            description: "A timeless favorite topped with zesty pepperoni and melted cheese.",
            price: 14.99,
            category: "Pizzas"
        },
        {
            name: "Spaghetti Carbonara",
            description: "A classic Italian dish with creamy sauce, pancetta, and parmesan cheese.",
            price: 16.99,
            category: "Pasta"
        },
        {
            name: "Chicken Alfredo",
            description: "Grilled chicken in a creamy Alfredo sauce, served over fettuccine noodles.",
            price: 16.99,
            category: "Pasta"
        },
        {
            name: "Fish and Chips",
            description: "Golden fried fish served with a side of crispy fries.",
            price: 15.99,
            category: "Seafood"
        },
        {
            name: "Shrimp Scampi",
            description: "Sautéed shrimp in a garlic butter sauce, served over linguine.",
            price: 18.99,
            category: "Seafood"
        },
        {
            name: "Vegetable Curry",
            description: "A medley of fresh vegetables cooked in a rich curry sauce, served over rice.",
            price: 14.99,
            category: "Vegetarian"
        },
        {
            name: "Chocolate Cake",
            description: "Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.",
            price: 8.99,
            category: "Desserts"
        },
        {
            name: "Cheesecake",
            description: "Creamy cheesecake topped with fresh strawberries and a sweet glaze.",
            price: 8.99,
            category: "Desserts"
        },
        {
            name: "French Onion Soup",
            description: "A savory broth with caramelized onions, topped with melted cheese and croutons.",
            price: 7.99,
            category: "Soups"
        },
        {
            name: "Tomato Basil Soup",
            description: "A rich tomato soup with fresh basil and a touch of cream.",
            price: 6.99,
            category: "Soups"
        }
    ]
    const seedData = async () => {
      try {
       
        await MenuItem.insertMany(foodItems);
        console.log('Seed data inserted successfully');
      } catch (error) {
        console.error('Error seeding data:', error);
      }
    };
    
   
    seedData();
   
    



