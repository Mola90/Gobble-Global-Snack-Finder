const router = require('express').Router();
const {User, Country, Ratings, Like} = require('../Models');


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

router.get('/reviews', async(req,res) => {
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

router.get('/likes', async(req,res) => {
    try{
        
        res.render('dashboard')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});



module.exports = router;