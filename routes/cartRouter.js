const express = require('express')
const router = express.Router()



const { Item } = require('../models/menuItemModel'); 



// Add an item to the cart
router.post('/add-to-cart', (req, res) => {
  const { name, price } = req.body; // You should send the item data in the request body
  const item = new Item(name, price);
  shoppingCart.addItem(item);
  res.json({ success: true, message: 'Item added to cart' });
});


module.exports = router