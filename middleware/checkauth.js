//A.T.
const jwt = require('jsonwebtoken');
const { DATABASE_URL, PORT, JWT_KEY_SECRET } = require('../config');

//middleware
const isAdmin = (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      console.log('No token found, authentication failed');
      return res.redirect('/users/login');
    }

    const decodedToken = jwt.verify(token, JWT_KEY_SECRET);

    if (decodedToken.role !== 'admin') {
      console.log('Access denied: Not an admin');
      return res.status(403).send('<h1>Access denied: Not an admin</h1>');
      //return res.status(403).json({ message: 'Access denied: Not an admin' });//3 nov
    }

    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    return next(error.reason);
  }
};

module.exports = isAdmin;

// const checkauth = (req, res, next) => {  //03 nov changed to admin above
//     try {
//         console.log("test");
//         const token = req.cookies.access_token //It attempts to retrieve the JWT token from the access_token cookie in the request.

//         if(!token) { 
//             console.log('no token found, authentication failed')
//             return res.redirect('/users/login')//if not found redirects to log page
//         }   
//             //if token is found, it uses jwt.verify to verify the token's authenticity using the JWT_KEY_SECRET
//             const decodedToken = jwt.verify(token, JWT_KEY_SECRET)

//             req.userId = decodedToken.userId //it extracts the userId from the decoded token and attaches it req.userId
//             next() //next route

//     } catch(error) {
//         return next(error.reason)
//     }
// }

// module.exports = checkauth