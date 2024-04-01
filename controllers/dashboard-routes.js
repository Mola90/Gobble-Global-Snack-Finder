const router = require('express').Router();
const {User, Country, Ratings, Like, Snack, Snack_Country, Snack_Category,WishList, List } = require('../models');


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
            },
            {
                model: Snack
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
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length

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

router.get('/wishlist', async (req,res) => {
    try {
        // Retrieve the logged-in user's ID from the session or request object
        const userId = req.session.userId || 1; // Fallback to 1 for testing

        const wishData = await User.findAll({
            where: { id: userId },
            attributes: ['id'], 
            include: [{
                model: Snack,
                as: 'FavouriteSnacks',
                attributes: ['snack_name', 'brand_name', 'snack_image'],
                through: { attributes: ["user_id", ] } 
            }]
        });

        // Mapping over wishData to get plain data
        const newData = wishData.map(wishdata => wishdata.get({ plain: true }));
        
        const wdata = newData[0].FavouriteSnacks;
        res.render('dashboard_wishes', {wdata});

        


        // res.json(newData[0].FavouriteSnacks);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/edit', async(req,res) => {
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
        res.render('dashboard-edit-profile', dashboardData)
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});



router.get('/likes', async (req, res) => {
    try {
        // Retrieve the logged-in user's ID from the session or request object
        const userId = req.session.userId;

        // Query the database for likes associated with the logged-in user
        const likeData = await Like.findAll({
            where: { user_id: 1 }, 
            attributes: ['user_id'], 
            include: [{ model: Snack, attributes: ['snack_name', 'brand_name', 'snack_image'] }] 
        });

        const likes = likeData.map((like) => like.get({ plain: true }));

        res.render('dashboard_likes', {likes});
        // res.json(likeData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Route handler for GET request to find snacks reviewed by a user
router.get('/review/:userId', async (req, res) => {
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
        res.render('dashboard_review', {reviews});
        // res.json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Route handler for GET request to find snacks added by a user
router.get('/submission/:userId', async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const userId = req.params.userId; 
        
        // Query the database for snacks added by the specified user
        const submissionData = await Snack.findAll({
            where: { user_id: 1 }, // Filter by user ID
            attributes: ['snack_name', 'brand_name', 'snack_image'],
            // include: [
            //     { model: Country, attributes: ['country_name'] }, // Include country name
            //     { model: Snack_Category, attributes: ['category_name'] } // Include category name
            // ]
        });

        const submission = submissionData.map((submission) => submission.get({ plain: true }));
    
        // Render the data or send it as JSON response
        res.render('dashboard_submission', {submission});
        // res.json(submission);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});



module.exports = router;