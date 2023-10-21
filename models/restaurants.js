const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true, unique: true},
    rating: {type: Number, required: true, max: 5, min: 0},
  });


  const Restaurant = mongoose.model("Restaurant",restaurantSchema,"restaurants");

  module.exports = {Restaurant};

