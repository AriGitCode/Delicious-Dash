//!!! npm i  bcrypt  bcryptjs  cookie-parser  jsonwebtoken
// const express = require('express');
// const router = express.Router();// A.T. do we need this????


//This is NEW REPO!!!
const mongoose = require('mongoose');

//const methodOverride = require('method-override');//for HTTP method overriding
//const cookieParser = require('cookie-parser');//for handling cookies //A.T. do we need this????

//authentication related libraries
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system: 
mongoose.Promise = global.Promise

const { JWT_KEY_SECRET } = require('../config') //JWT is a secret word that only exists on server, Nobody allowed to know otherwise they can replicate JWT
const User = require('../models/userModel');



//NEW
const sendNewUserForm = (req, res, next) => {

  let isLoggedIn = false

  if(req.cookies.access_token) {
      isLoggedIn = true
  } 
  res.render('users/newuser.ejs', {isLoggedIn})

}

//CREATE   
const createNewUser = (req, res, next) => {
  console.log('Posting New User')

  const requiredFields = ['firstName', 'lastName', 'email', 'password']

  for(let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i]
      if(!(field in req.body)) {
          const errorMessage = `missing ${field} in request body`
          console.error(errorMessage)
          return res.send(errorMessage)
      }
  }

  //normalizing email
  req.body.email = req.body.email.toLowerCase()
  console.log(req.body)

  const { firstName, lastName, email, password } = req.body

    //hashing the password with bcrypt
    bcrypt.hash(password, 12) //anything higher than 20 would take days to encrypt and decrypt
        .then(encryptedPw => {
            console.log(`Finished encrypting password: ${encryptedPw}`)
            const newUser = { firstName, lastName, email, password: encryptedPw }

            User.create(newUser)
                .then(usr => {
                    const token = jwt.sign(
                        { userId: usr.id, email: usr.email }, //payload
                        JWT_KEY_SECRET, //server secret
                        // { expiresIn: '1hr' }
                    )
                        // const response = { user: usr, token }
                        // return res.send(response)

                        return res.cookie('access_token', token).redirect('/users')
                        
                })
        })

}

//LOGIN - GET
const sendLoginForm = (req, res, next) => {

//   let isLoggedIn = false

//   if(req.cookies.access_token) {
//       isLoggedIn = true
//   } 
  res.render('users/login.ejs', {})

}

//LOGIN - POST 
const login = (req, res, next) => {
  //normalize email:
  req.body.email.toLowerCase()

  //lets check if the user exists: 
  User.findOne({ email: req.body.email })
      .then((usr) => {
          console.log(usr)
          if(!usr){
              return res.send('email not found')
          } //end of email check

          //now that the user exists, we'll check if the req.body.password matches the user's password: 
          bcrypt.compare(req.body.password, usr.password) //bcrypt.compare is a method that returns TRUE or FALSE
              .then((matched) => {
                  if(matched === false){
                      return res.send('invalid password, try again')
                  } 
                  const token = jwt.sign(
                      { userId: usr.id, email: usr.email }, 
                      JWT_KEY_SECRET, 
                    //   { expiresIn: '1hr' }
                  )

                  return res.cookie('access_token', token)
                      .redirect('/users')
              })

      })
}

//LOGOUT
const logout = (req, res, next) => {
console.log('is my logout working? or not?????? aaaaaah!')
const token = req.cookies.access_token
console.log(token)
if(!token) {
    return res.send('Failed to logout')
}
const data = jwt.verify(token, JWT_KEY_SECRET)
console.log(data)

return res.clearCookie('access_token')
    .redirect('/users/login')
}

module.exports = {
sendNewUserForm, 
createNewUser, 
sendLoginForm,
login, 
logout
}