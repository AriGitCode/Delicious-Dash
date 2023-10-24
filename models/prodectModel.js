const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this will be within the product and difine what the product is like(breakfast,dinner...etc)
const CategorySchema = new Schema(
    {
        name: { type: String, required: true }
    }
)

// 
const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
    }
)

module.exports = mongoose.model('Product', ProductSchema);