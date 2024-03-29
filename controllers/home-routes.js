const router = require('express').Router();
const {Snack, Ratings, Snack_Category, Snack_Country, Category, Country, User} = require('../Models')



router.get('/', async(req, res) =>{
    try{
        res.render('landing-page');
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

router.get('/add', async(req,res) => {
    try{
        res.render('add_snack')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/snack/:id', async(req,res) => {
    try{
        let singleSnack = await Snack.findByPk(req.params.id, {include:[
            {
                model: Ratings,
                include: [{
                    model: User, 
                    attributes: ["username"],
                    include: [{
                        model: Country,
                        attributes: ["country_name"]
                    }]
                }]
            },
            {
                model: Snack_Category,
                include:[{
                    model: Category,
                    attributes: ["category_name"]
                }]
            },
            {
                model: Snack_Country,
                include: {
                    model: Country,
                    attributes: ["country_name"]
                }
            },
        ]});

        if(!singleSnack){
            return res.status(404).json("Snack not found")
        }

        let serialisedSnack = singleSnack.get({ plain:true });

        let ratings = serialisedSnack.ratings;

        //Find the average rating
        let ratingsTotal = 0;


        //Create an array with star rating for rendering user review star ratings
        ratings.forEach((rating) => {
            rating.starArr = [];
            let goldStars = rating.user_rating;
            let blankStars = 5 - rating.user_rating;

            for(let i = 0; i < goldStars; i++){
                rating.starArr.push({color: "text-yellow-300"});
            }
            for(let i = 0; i < blankStars; i++){
                rating.starArr.push({color: "text-gray-300"});
            }
            ratingsTotal = ratingsTotal + rating.user_rating;
        });
        //Find ratings average
        let ratingsAvg = parseFloat((ratingsTotal / ratings.length).toFixed(2));
        let ratingsFloor = Math.floor(ratingsAvg);

        //Create array to generate overall score stars
        let overallRatingStars = []
        let goldStars = ratingsFloor;
        let blankStars = 5 - ratingsFloor;

        for(let i = 0; i < goldStars; i++){
            overallRatingStars.push({color: "text-yellow-300"});
        }
        for(let i = 0; i < blankStars; i++){
            overallRatingStars.push({color: "text-gray-300"});
        }


        let snackData = {
            snack_name: serialisedSnack.snack_name,
            snack_brand: serialisedSnack.brand_name,
            snack_image: serialisedSnack.snack_image,
            snack_rating: serialisedSnack.rating,
            snack_categories: serialisedSnack.snack_categories,
            snack_countries: serialisedSnack.snack_countries,
            ratings_average: ratingsAvg,
            ratings_floor: ratingsFloor,
            ratings: ratings,
            snack_id: serialisedSnack.id,
            overallStarArr: overallRatingStars,
            numReviews: ratings.length
        }
        
        res.render('single_snack', snackData)
     }catch(err){
        console.log(err);
        res.status(400).json(err);

    }});

      


router.get('/signup', async(req,res) => {
    try{
        res.render('signup')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})


router.get('/login', async(req,res) => {
    try{
        res.render('login')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/browse', async(req,res) => {
    try{
        res.render('browse_snacks')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;