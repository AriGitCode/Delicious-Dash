const express = require('express')

const router = express.Router()

//const {User} = require('../models/userModel')//A.T. it is in authController

const {    //A.T
    sendNewUserForm,
    createNewUser,
    sendLoginForm,
    login,
    logout,
  } = require("../controllers/authController");

// router.post('/create-user', (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         _id: req.body._id,
//     })

//     user.save((err, user) => {
//         if (err) {
//             res.status(400).send({ error : err})
//         } else {
//             res.status(200).send({ data: user})
//         }
//     })
// })


//from here A.T modified code


//NEW renders new user regist-n form by sendNewUserForm function from authController.
router.get('/login', sendLoginForm);
router.get("/new", sendNewUserForm);

//CREATE user registration and account creation
router.post("/signup", createNewUser);

// add mw for checkauth
// router.use(checkauth);

//LOGIN - GET user login form 
router.get("/login", sendLoginForm);

//LOGIN - POST sends the login cred-s (email and password) securely to server for authentication.
router.post("/login", login);

//LOGOUT
router.get("/logout", logout);

module.exports = router;