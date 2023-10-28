const express = require('express')

const router = express.Router()

const Product = require('../models/menuItemModel');

// // request to display all products
// router.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find()
//         res.status(200).send({ data: products})
//     } catch (err) {
//         res.status(400).send({ error: err})
//     }
// })

// // since the above function will show all products, we want to show the least products in the client side.
// // so we will call the data by the category and each will have limited products in it.
// // i used .aggregate to summarize large db with many features to layers with fewer features.
// router.get('/products-by-categories', async(req, res) => {
//     try {
//         const products = await Product.aggregate([
//             { $match: {}},
//             { $group: {
//                 _id: '$category',
//                 products: { $push: '$$ROOT'} // ROOT returns all fields of products
//             }},
//             { $project: { name: '$_id', products: 1, _id: 0}}
//         ])
//         res.status(200).send({ data: products})
//     } catch (err) {
//         res.status(400).send({ error: err})
//     }
// })

// module.exports = router