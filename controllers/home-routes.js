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
        let ratingTotal = 0;
        for(let i = 0; i < ratings.length; i++){
            ratingTotal = ratingTotal + ratings[i].user_ratings
        }
        let ratingsAvg = ratingTotal/ratings.length;

        //Create an array with star rating for rendering
        ratings.forEach((rating) => {
            rating.starArr = [];
            let goldStars = rating.user_rating;
            let blankStars = 5 - rating.user_rating;
            console.log(rating.user_rating);
            
            console.log(rating.User);

            for(let i = 0; i < goldStars; i++){
                rating.starArr.push({color: "text-yellow-300"});
            }
            for(let i = 0; i < blankStars; i++){
                rating.starArr.push({color: "text-gray-300"});
            }
        })
        console.log(ratings);

        let snackData = {
            snack_name: serialisedSnack.snack_name,
            snack_brand: serialisedSnack.brand_name,
            snack_image: serialisedSnack.snack_image,
            snack_rating: serialisedSnack.rating,
            snack_categories: serialisedSnack.snack_categories,
            snack_countries: serialisedSnack.snack_countries,
            ratings_average: ratingsAvg,
            ratings: ratings,
            snack_id: serialisedSnack.snack_id
        }
        console.log(snackData)
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


module.exports = router;