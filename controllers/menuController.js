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

const createMenuItem = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const newItem = new MenuItem({ name, description, price, category });
        await newItem.save();
        res.redirect('/menu'); // Redirect to the menu page or any other appropriate page
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).send('Error creating menu item');
    }
};

const updateMenuItem = async (req, res) => {
    const { id } = req.params; // Get the menu item ID from the URL
    try {
        const updatedData = req.body; // Data to update
        await MenuItem.findByIdAndUpdate(id, updatedData);
        res.redirect('/menu'); // Redirect to the menu page or any other appropriate page
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).send('Error updating menu item');
    }
};

const deleteMenuItem = async (req, res) => {
    const { id } = req.params; // Get the menu item ID from the URL
    try {
        await MenuItem.findByIdAndRemove(id);
        res.redirect('/menu'); // Redirect to the menu page or any other appropriate page
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).send('Error deleting menu item');
    }
};

module.exports = {
    getMenuItems,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem, 
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