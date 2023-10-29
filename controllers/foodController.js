const Food = reguire('..models/menuItemModel.js')
const { JWT_KEY_SECRET } = require('../config');
const jwt = require('jsonwebtoken');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//GET
const listFoods = (req, res, next) => {
    Food.find()
        .then((foods) => {
            res.render('/dishes.ejs', { foods });
        })
        .catch((err) => {
            console.error(err);
        });
};