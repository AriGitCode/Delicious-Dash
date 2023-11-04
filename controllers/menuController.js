const MenuItem = require('../models/menuItemModel');

const User = require('../models/userModel');
const getMenuItems = async (req, res) => {
    try {
     let renderFileName = "menu.ejs"
      const user = await User.findById(req.userId);
      if(user.role === "admin" ){
        renderFileName = "admin-menu.ejs"
      }
      console.log("user", user);
        const menuItems = await MenuItem.find();
        
       
        const categories = {};
        menuItems.forEach(item => {
            if (categories[item.category]) {
                categories[item.category].push(item);
            } else {
                categories[item.category] = [item];
            }
        });
        
        res.render(renderFileName, { menuItems, categories});
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
        res.redirect('/menu'); 
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).send('Error creating menu item');
    }
};

const updateMenuItem = async (req, res) => {
    const { id } = req.params; 
    try {
        const updatedData = req.body;
        await MenuItem.findByIdAndUpdate(id, updatedData);
        res.redirect('/menu'); 
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).send('Error updating menu item');
    }
};

const deleteMenuItem = async (req, res) => {
    const { id } = req.params; 
    try {
        await MenuItem.findByIdAndRemove(id);
        res.redirect('/menu'); 
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



