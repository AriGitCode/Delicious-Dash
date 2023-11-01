
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Route for handling feedback submission on the 'customer-experience' page.
router.post('/', async (req, res) => {
    try {
      const { feedback } = req.body;
      const userId = req.userId;
      console.log(req.body);
      console.log(req.userId);
      // Create a new feedback entry in the database.
      const filter = {_id: req.userId};
     
      const user = await User.findOne(filter);
      console.log(user.feedbacks);
      user.feedbacks.push(feedback)
      const update = {feedbacks: user.feedbacks}
      const userModel = await User.findOneAndUpdate(filter, update);
      
      await userModel.save();
  
      // Redirect the user back to the 'customer-experience' page with the newly added feedback.
      res.redirect('/customer-experience');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error submitting feedback.');
    }
  });
  
  module.exports = router