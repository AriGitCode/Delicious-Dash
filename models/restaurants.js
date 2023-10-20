const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = { Restaurant }