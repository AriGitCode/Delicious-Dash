const mongoose = require('mongoose');
const Cart = require('../models/cartModel');

const shoppingCart = {
    items: [],
  
    addItem(item) {
      this.items.push(item);
    },
  
    removeItem(index) {
      this.items.splice(index, 1);
    },
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0);
    },
  
    getCartItems() {
      return this.items;
    },
  };
  
  module.exports = shoppingCart;
  