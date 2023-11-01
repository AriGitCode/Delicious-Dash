
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


// CREATE Feedback
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
    res.redirect('/feedbacks');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting feedback.');
  }
});


// READ Feedback
router.get('/',  async (req, res) => {
  try {
    console.log("TESTAR");
    const userId = req.userId;
    const user = await User.findById(userId);
    console.log("User", user);
    if (!user) {
      return res.status(404).send('User not found');
    }
    if (user.feedbacks) {
      const feedbacks = user.feedbacks.map((f, i) => ({ id: i, feedback: f }));
      
      res.render('customer-experience.ejs', { feedbacks: feedbacks });
      
    } else {res.render('customer-experience.ejs', { feedbacks:[]});

    }
    //console.log(user);
   // const feedbacks = user.feedbacks;
   // console.log("feedbacks", feedbacks);
   // res.json({ feedbacks });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching feedbacks');
  }
});

// DELETE Feedback
router.post('/:id',  async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    const filteredFeedbacks = user.feedbacks.filter(
      (f, index) => index != feedbackId)

    user.feedbacks = filteredFeedbacks;
    await user.save();

    return res.redirect('/feedbacks');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting feedback');
  }
});



router.post('/:id/edit', async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const userId = req.userId;
    const updatedFeedback = req.body.updatedFeedback; // Assuming you have this in the request body

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (feedbackId >= 0 && feedbackId < user.feedbacks.length) {
      // Update the feedback at the specified index
      user.feedbacks[feedbackId] = updatedFeedback;

      // Save the updated user object
      await user.save();
    } else {
      return res.status(404).send('Feedback not found');
    }

    return res.redirect('/feedbacks');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating feedback');
  }
});

//EDIT
// router.post('/:id/edit',  async (req, res) => {
//   try {
//     const feedbackId = req.params.id;
//     const userId = req.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     user.feedbacks[feedbackId] = newFeedback
//     await user.save();
  

//     return res.redirect('/feedbacks');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error deleting feedback');
//   }
// });

module.exports = router