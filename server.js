// define the middleware and services here
const express = require("express");
const bodyParser = require("body-parser");// to parse the request and create req.body
const cookieParser = require("cookie-parser");// A.T. 27.10 import cookie
const ejs = require('ejs');
//const methodOverride = require("method-override");
//const db = require('../db/connection.js');
// const env = require("dotenv").config({path: './.env'});

// const path = require('path');
const app = express();
const PORT = 4000;


require('./db/connection.js');
// should be before route definitions
app.use( express.static('public'))

//Import Routers
const userRouter = require('./routes/userRouter');
const menuRouter = require ('./routes/menuRouter');//A.T 30.10
//const customerExpRouter = require('./routes/customerExpRouter.js')
// app.set('views',path.join(__dirname, 'views'))
 app.set('view engine', 'ejs');

// setting up the MW and Define a route
//app.use(express.static("public")); // added A.T. making these files accessible to clients via URLs
app.use(bodyParser.json({ limit: "200mb" })); //looks at any requests that comes in that has json in it and parses it into a JS object that you can access the keys and use like a regular object so that my app can manipulate it.
app.use(express.urlencoded({ limit: "200mb", extended: false }));// added A.T.
//app.use(methodOverride("_method"));// added A.T.
app.use(cookieParser());// A.T. 


//use routers
app.use('/users', userRouter);
app.use('/menu', menuRouter);




app.use('/home',(req, res)=>{
  res.render('./about.ejs');
})
app.use('/customer-experience',(req, res)=>{
  res.render('./customer-experience.ejs');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


