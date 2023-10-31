// define the middleware and services here
const express = require("express");
const bodyParser = require("body-parser");// to parse the request and create req.body
const cookieParser = require("cookie-parser");// A.T. 27.10 import cookie
//const methodOverride = require("method-override");
//const db = require('../db/connection.js');
// const env = require("dotenv").config({path: './.env'});
const ejs = require('ejs');
// const path = require('path');
const app = express();
const PORT = 4000;

// require('./db/connection.js');
// should be before route definitions
app.use( express.static('public'))

//Import Routers
const userRouter = require('./routes/userRouter');
const menuRouter = require ('./routes/menuRouter');//A.T 30.10
const cartRouter = require ('./routes/cartRouter.js');

 app.set('view engine', 'ejs');

// setting up the MW and Define a route
//app.use(express.static("public")); // added A.T. making these files accessible to clients via URLs
app.use(bodyParser.json({ limit: "200mb" })); //looks at any requests that comes in that has json in it and parses it into a JS object that you can access the keys and use like a regular object so that my app can manipulate it.
app.use(express.urlencoded({ limit: "200mb", extended: false }));// added A.T.
//app.use(methodOverride("_method"));// added A.T.
app.use(cookieParser());// A.T. 



//Route to render the menu page
app.get('/menu', (req, res) => {
  const salads = [
    { name: 'Chicken Caesar Salad', price: 14.99, image: '' },
    { name: 'Garden Salad', price: 9.99, image: '' },
    // Add more salad items as needed
  ];

  const pizzas = [
    { name: 'Pepperoni Pizza', price: 14.99, image: '../images/' },
    { name: 'Margherita Pizza', price: 13.99, image: 'margherita-pizza.jpg' },
    // Add more pizza items as needed
  ];

  res.render('menu.ejs', { salads, pizzas });
});


// adding eventlistner to add to cart button
// const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//  // Handle the button click
//  addToCartButtons.forEach(button => {
//   button.addEventListener('click', function () {
//       // Get the menu item's unique identifier
//       const itemId = this.closest('.menu-item').getAttribute('data-itemid');

      
//       addToCart(itemId);
//   });
// });



app.use('/home',(req, res)=>{
  res.render('./about.ejs');
})



app.use('/cart',(req, res)=>{
  res.render('./cart.ejs');
})

app.use('/users', userRouter);
app.use('/menu', menuRouter);
app.use('/cart', cartRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


