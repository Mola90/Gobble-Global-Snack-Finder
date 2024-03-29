const router = require('express').Router();
const {User, Country, Ratings, Like, Snack} = require('../Models');


router.get('/', async(req,res) => {
    try{
        let userDetails = await User.findByPk(1, {include: [
            {
            model: Country,
            attributes: ["country_name", "country_emoji"],
            },
            {
                model: Ratings,
            },
            {
                model: Like
            }
        ]});

        const serialisedData = userDetails.get({plain:true});
        console.log(serialisedData)

        let dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            profile_picture: serialisedData.profile_picture
        }
        res.render('dashboard', dashboardData)
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

router.get('/likes', async(req,res) => {
    try{
        
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/review', async (req, res) => {
    try {
        // Retrieve the logged-in user's ID from the session or request object
        const userId = req.session.userId; 
    
        // Query the database for ratings associated with the logged-in user
        const reviewData = await Ratings.findAll({
            where: { user_id: 1 },
            attributes: ['text_review', 'review_title', 'date_created'], // Specify the required fields
            include: [{ model: Snack, attributes: ['snack_name', 'brand_name', 'snack_image'] }] // Include the User model to access user-related attributes
        });

        const reviews = reviewData.map((reviews) => reviews.get({plain: true}));
    
        // Render the 'dashboard_review' template and pass the review data to it
        res.render('dashboard_review', { reviews});
        // res.json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

  


module.exports = router;