const MenuItem = require('../models/menuItemModel.js')
// const { JWT_KEY_SECRET } = require('../config');
// const jwt = require('jsonwebtoken');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//GET
const getMenuItems = async(req, res) => {
    try{
        const menuItems = await MenuItem.find();
        const salads = menuItems.filter(item => item.category === 'Salads');
        const pizzas = menuItems.filter(item => item.category === 'Pizzas');
        console.log("menuItems", menuItems)
        console.log("salads",salads)
        console.log("pizza",pizzas)
        res.render('menu.ejs', { menuItems,salads, pizzas });
    } catch(err) {
            res.status(500).send('Error fetching menu items')
    };
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