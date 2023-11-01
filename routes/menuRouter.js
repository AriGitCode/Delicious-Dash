// //A.T. 28.10 
const express = require("express");
const router = express.Router();
const menuController = require('../controllers/menuController')


router.get('/', menuController.getMenuItems);//A.T don't know if it's right method

module.exports = router















//Old code
// app.get('/MenuItem/:id', (req, res) => {
//     const foodId = parseInt(req.params.id);
//     const foodItem = MenuItem.find(item => item.id === foodId);
//     if (!foodItem) {
//       // Food item not found
//       res.status(404).send('Food item not found');
//     } else {
//       // Render the details page for the food item using EJS
//       res.render('dishes', { foodItem });
//     }
//   });
// New

// //main page
// router.get("/", getAllFoods);
// //NEW
// router.get("/new", checkauth, sendNewFoodForm);
//  //SHOW
// // router.get("/:id", getFoodById);
// // //CREATE
// router.post("/", createNewFood);
// //UPDATE
// router.put("/:id", updateFoodById);
// //DELETE
// router.delete("/:id", deleteFoodById);
// module.exports = router;


// const {
//   getAllFoods,
//   sendNewFoodForm,
//   getFoodById,
//   //getStoriesByUserId,
//   //createNewFood,
//   sendEditFoodForm,
//   updateFoodById,
//   deleteFoodById, //?
// } = require("../controllers/foodController");
// // const { application } = require("express");

// //==============ROUTES============================

// 
// router.get("/", getAllFoods);

// //NEW ---------------------->
// router.get("/new", checkauth, sendNewFoodForm);

// //SHOW   ----------------->
// router.get("/:id", getFoodById);

// //shows user's stories
// //router.get("/user/:id", getStoriesByUserId);

// router.use(checkauth); //MIDDLEWARE <--------------------------------🔏

// //CREATE - AUTHENTICATION  -------------------> READY
// //router.post("/", createNewFood);

// //EDIT - AUTHENTICATION
// router.get("/:id/edit", sendEditFoodForm);

// //UPDATE - AUTHENTICATION
// router.put("/:id", updateFoodById);

// //DELETE - AUTHENTICATION
// router.delete("/:id", deleteFoodById);

// module.exports = router;