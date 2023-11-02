const MenuItem = require('../models/menuItemModel');
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        
        // Dynamically categorize all menu items
        const categories = {};
        menuItems.forEach(item => {
            if (categories[item.category]) {
                categories[item.category].push(item);
            } else {
                categories[item.category] = [item];
            }
        });

        res.render('menu.ejs', { menuItems, categories });
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).send('Error fetching menu items');
    }
};

module.exports = {
    getMenuItems,
};



/*const getMenuItems = async (req, res) => {
    try {
        // Initialize empty arrays for salads and pizzas
        const salads = [];
        const pizzas = [];

        // Use Array.forEach to categorize food items
        foodItems.forEach((item) => {
            if (item.category === 'Salads') {
                salads.push(item);
            } else if (item.category === 'Pizzas') {
                pizzas.push(item);
            }
        });

        res.render('menu.ejs', { salads, pizzas });
    } catch (err) {
        res.status(500).send('Error filtering menu items');
    }
};*/