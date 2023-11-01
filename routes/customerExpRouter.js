
// const express = require('express');
// const router = express.Router();
// const Feedback = require('../models/customerExpModel');

// // Route for handling feedback submission on the 'customer-experience' page.
// router.post('/customer-experience', async (req, res) => {
//     try {
//       const { message } = req.body;
//       const userId = req.user.id;
  
//       // Create a new feedback entry in the database.
//       const feedback = new Feedback({
//         user: userId,
//         message,
//       });
  
//       await feedback.save();
  
//       // Redirect the user back to the 'customer-experience' page with the newly added feedback.
//       res.redirect('/customer-experience');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error submitting feedback.');
//     }
//   });
  
