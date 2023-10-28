//A.T.
const jwt = require('jsonwebtoken')//require the jsonwebtoken library to work with JWTs 
const { JWT_KEY_SECRET } = require('../config')
//import config values: DATABASE_URL, PORT, JWT_KEY_SECRET from a config file

//middleware
const checkauth = (req, res, next) => {
    try {
        const token = req.cookies.access_token //It attempts to retrieve the JWT token from the access_token cookie in the request.

        if(!token) { 
            console.log('no token found, authentication failed')
            return res.redirect('/users/login')//if not found redirects to log page
        }   
            //if token is found, it uses jwt.verify to verify the token's authenticity using the JWT_KEY_SECRET
            const decodedToken = jwt.verify(token, JWT_KEY_SECRET)

            req.userId = decodedToken.userId //it extracts the userId from the decoded token and attaches it req.userId
            next() //next route

    } catch(error) {
        return next(error.reason)
    }
}

module.exports = {checkauth}