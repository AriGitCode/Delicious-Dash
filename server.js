// define the middleware and services here
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ejs = require('ejs');

const app = express();
const PORT = 4000;


require('./db/connection.js');
app.use( express.static('public'))

//Import Routers
const userRouter = require('./routes/userRouter');
const menuRouter = require ('./routes/menuRouter');
const adminRouter = require ('./routes/adminMenuRouter');
//const feedbackRouter = require ('./routes/feedbackRouter'); 
const checkauth = require("./middleware/checkauth.js");
 app.set('view engine', 'ejs');

// setting up the MW and Define a route
app.use(express.static("public")); 
app.use(bodyParser.json({ limit: "200mb" })); 
app.use(cookieParser());
app.use(checkauth);

//use routers
app.use('/users', userRouter);
app.use('/menu', menuRouter);
app.use('/admin/menu',adminRouter);
// app.use('/feedbacks', feedbackRouter);



app.use('/home',(req, res)=>{
  res.render('./about.ejs');
})
app.use('/customer-experience',(req, res)=>{
  res.render('./customer-experience.ejs');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


