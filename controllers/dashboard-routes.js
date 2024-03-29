const router = require('express').Router();
const {Snack, Ratings, Snack_Category, Snack_Country, Category, Country, User} = require('../models')


router.get('/', async(req,res) => {
    try{
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/snacks', async(req,res) => {
    try{
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/wishlist', async(req,res) => {
    try{
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/dashboard/reviews', async(req,res) => {
    try{
        res.render('dashboard_review')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});



router.get('/likes', async(req,res) => {
    try{
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/:userId', async (req, res) => {
    try {
      // Retrieve the logged-in user's ID from the session or request object
      const userId = req.session.userId; // Assuming userId is stored in the session
  
      // Query the database for ratings associated with the logged-in user
      const reviewData = await Ratings.findAll({
        where: { user_id: req.params.userId },
        attributes: ['text_review', 'review_title'], // Specify the required fields
        include: [{ model: User, attributes: ['username'] }] // Include the User model to access user-related attributes
      });
  
      res.render('dashboard_review')
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router;