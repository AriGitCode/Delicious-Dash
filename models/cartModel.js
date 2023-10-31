const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  item: {
    type: String, // You can change the type to match your product schema
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId, // associating the cart with a user
    ref: 'User', // Reference to the User model 
  },

});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
