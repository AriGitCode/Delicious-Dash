//A.T.
const jwt = require('jsonwebtoken');
const { DATABASE_URL, PORT, JWT_KEY_SECRET } = require('../config');

const checkauth = (req, res, next) => {  
    try {
        console.log("test");
        const token = req.cookies.access_token //It attempts to retrieve the JWT token from the access_token cookie in the request.

        if(!token) { 
            console.log('no token found, authentication failed')
            return res.redirect('/users/login')//if not found redirects to log page
        }   
            
            const decodedToken = jwt.verify(token, JWT_KEY_SECRET)

            req.userId = decodedToken.userId 
            next() //next route

    } catch(error) {
        return next(error.reason)
    }
}

module.exports = checkauth