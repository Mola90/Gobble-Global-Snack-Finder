const router = require('express').Router();
const {User, Country, Ratings, Like, Snack, Snack_Country, Snack_Category, WishList} = require('../../models');

// Route handler for GET request to find snacks reviewed by a user
router.get('/dashboard', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        
        // Extract the user ID from the request parameters
        const userId = req.session.user_id;
        
        // Retrieve user details for the specified user
        const userDetails = await User.findByPk(userId, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                    include: [{ model: Snack, 
                        attributes: ['snack_name', 'brand_name', 'snack_image', 'id'] }]
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]

        });

        // If userDetails is null, handle the case when the user is not found
        if (!userDetails) {
            return res.status(404).json({ error: 'User not found' });
        }

        const serialisedData = userDetails.get({ plain: true });

        const dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };

        // This initialises a variable name review and assigns it the result of mapping over the ratings array in the serialised data
        const reviews = serialisedData.ratings.map((rating) => ({
            text_review: rating.text_review,
            review_title: rating.review_title,
            date_created: rating.date_created,
            snack_name: rating.Snack.snack_name,
            brand_name: rating.Snack.brand_name,
            snack_image: rating.Snack.snack_image,
            logged_in: req.session.logged_in,
            id: rating.Snack.id
        }));

        console.log('Reviews This is a check:', reviews);
    
        // Render the 'dashboard_review' template and pass the review data to it
        res.render('dashboard_review', { dashboardData, reviews });

        // res.json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});