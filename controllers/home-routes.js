const router = require('express').Router();
const {Snack, Ratings, Snack_Category, Snack_Country, Category, Country, User, Like, WishList} = require('../Models');
const withAuth = require('../utils/auth')



router.get('/', async(req, res) =>{
    try{
        let availableCountries = ["Australia", "Germany", "Ethiopia", "Papua New Guinea"];

        const randomIndex = Math.floor(Math.random() * availableCountries.length);

        console.log(randomIndex);

        //Fetch top 5 liked snacks from a random Country
        let allCountries = await Country.findOne({
            where: {
                country_name: availableCountries[randomIndex]
            },
            include: [
                {
                    model: Snack_Country,
                    attributes: ["snack_id"],
                    include: [
                        {
                        model: Snack,
                        include: [
                                {
                                    model: Like
                                },
                                {
                                    model: Ratings
                                },
                                {
                                    model: Snack_Country,
                                    include: [
                                        {
                                            model: Country,
                                            attributes: ["country_emoji"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        let serialisedCountry = allCountries.get({plain:true});
        let countriesOrdered = serialisedCountry.snack_countries.map((country) => {
            let singleSnack = country.snack;
            let ratingsTotal = 0;
            console.log(singleSnack)
            //Create an array with star rating for rendering user review star ratings
            singleSnack.ratings.forEach((rating) => {
                ratingsTotal = ratingsTotal + rating.user_rating;
            });
            //Find ratings average
            let ratingsAvg = parseFloat((ratingsTotal / singleSnack.ratings.length).toFixed(2));
            singleSnack.ratingsAvg = ratingsAvg;
            singleSnack.starArr = [];
            let goldStars = Math.floor(ratingsAvg);
            let blankStars = 5 - goldStars;
                for(let i = 0; i < goldStars; i++){
                    singleSnack.starArr.push({color: "text-yellow-300"});
                }
                for(let i = 0; i < blankStars; i++){
                    singleSnack.starArr.push({color: "text-gray-300"});
                }
            return singleSnack = country.snack;
        });

        countriesOrdered.sort((a,b) => b.likes.length - a.likes.length);

        let topFiveSnacks = [];
        
        for(let i = 0; i < 5; i++){
            if(countriesOrdered[i]){
                topFiveSnacks.push(countriesOrdered[i])
            }
            
        }

        //Fetch most recent 
        let allSnacks = await Snack.findAll({
                order: [['date_created', 'DESC']],
                limit: 6,
                include: [
                    {
                        model: Snack_Country,
                        include: [
                            {
                                model: Country,
                            },
                            
                        ]
                    },
                    {
                        model: Ratings
                    },
                ]
        })
        
        let seriealisedRecent = allSnacks.map(snack => snack.get({plain:true}));

        seriealisedRecent.map((snack) => {
            
            let ratingsTotal = 0;

            //Create an array with star rating for rendering user review star ratings
            snack.ratings.forEach((rating) => {
                ratingsTotal = ratingsTotal + rating.user_rating;
            });
            //Find ratings average
            let ratingsAvg = parseFloat((ratingsTotal / snack.ratings.length).toFixed(2));
            snack.ratingsAvg = ratingsAvg;
            snack.starArr = [];
            let goldStars = Math.floor(ratingsAvg);
            let blankStars = 5 - goldStars;
                for(let i = 0; i < goldStars; i++){
                    snack.starArr.push({color: "text-yellow-300"});
                }
                for(let i = 0; i < blankStars; i++){
                    snack.starArr.push({color: "text-gray-300"});
                }
            
        })

        let mostRecentFive = [];

        for(let i = 0; i < 5; i++){
            if(seriealisedRecent[i]){
                mostRecentFive.push(seriealisedRecent[i])
            }
        }

        //Fetch all reviews to render most recent reviews on front page
        let allReviews = await Ratings.findAll({
            order: [['date_created', 'DESC']],
            limit: 6,
            include: [
                {
                model: User,
                attributes: ["profile_picture", "username"]
                },
                {
                model: Snack, 
                attributes: ["snack_image", "snack_name", "id"],
                include: [
                    {
                        model: Snack_Country,
                        include: [{
                            model: Country,
                            attributes: ["country_emoji"]
                        }]
                    }
                ]
                }
            ]
        })

        let reviewArr = allReviews.map((review) => review.get({plain:true}))
        reviewArr.forEach((rating) => {
            rating.starArr = [];
            let goldStars = rating.user_rating;
            let blankStars = 5 - rating.user_rating;

            for(let i = 0; i < goldStars; i++){
                rating.starArr.push({color: "text-yellow-300"});
            }
            for(let i = 0; i < blankStars; i++){
                rating.starArr.push({color: "text-gray-300"});
            }
        });

        let Countries = await Country.findAll();
        let serialisedCountries = Countries.map(country => country.get({ plain: true }));
  
        let allCategories = await Category.findAll();
        let serialisedCategories = allCategories.map(category => category.get({ plain:true }));  

        console.log(reviewArr)
        let pageData = {
            reviewData: reviewArr,
            snackFromCountry: topFiveSnacks,
            country: serialisedCountry,
            snackFromRecent: mostRecentFive,
            countries: serialisedCountries, 
            categories: serialisedCategories,
            logged_in: req.session.logged_in
        }

        res.render('landing-page', pageData);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

router.get('/add', withAuth, async(req,res) => {
    try{
        let allCountries = await Country.findAll();
        let serialisedCountries = allCountries.map(country => country.get({ plain: true }));

        let allCategories = await Category.findAll();
        let serialisedCategories = allCategories.map(category => category.get({ plain: true }));

        let optionsData = {
            countries: serialisedCountries,
            categories: serialisedCategories
        }

        res.render('add_snack', {optionsData, logged_in: req.session.logged_in})
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
                    attributes: ["username", "profile_picture"],
                    include: [{
                        model: Country,
                        attributes: ["country_name", "country_emoji"]
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
                    attributes: ["country_name", "country_emoji"]
                }
            },
            {
                model: Like
            },
            {
                model: WishList
            }
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
            numReviews: ratings.length,
            numLikes: serialisedSnack.likes.length,
            numWish: serialisedSnack.wishlists.length,
            logged_in: req.session.logged_in
        }

        //Determine if user has like or saved this item to wishlist/likes
        let userLike;
        if(req.session.logged_in){
            userLike = await Like.findOne({
            where: {
                snack_id: serialisedSnack.id,
                user_id: req.session.user_id
            }
        })};
        
        if(userLike){
            snackData.userLikes = true;
        } else{
            snackData.userLikes = false;
        }
        
        let userSaved;
        if(req.session.logged_in){
            userSaved = await WishList.findOne({
            where: {
                snack_id: serialisedSnack.id,
                user_id: req.session.user_id   
            }
        })
        }
        
        if(userSaved){
            snackData.userSave = true;
        } else{
            snackData.userSave = false;
        };

        

        console.log(serialisedSnack)
        
        
        res.render('single_snack', snackData)
    } catch(err) {
        console.log(err);
        res.status(400).json(err);

    }
});


router.get('/signup', async (req, res) => {
    try {
      let allCountries = await Country.findAll();
      let serialisedCountries = allCountries.map(country => country.get({ plain: true }));
      res.render('signup', { countries: serialisedCountries, logged_in: req.session.logged_in });
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/browse', async (req, res) => {
    try {
      let allCountries = await Country.findAll();
      let serialisedCountries = allCountries.map(country => country.get({ plain: true }));

      let allCategories = await Category.findAll();
      let serialisedCategories = allCategories.map(category => category.get({ plain:true }));

      let allSnacks = await Snack.findAll(
        {include: [
                    {
                        model: Snack_Country,
                        include: [
                            {
                                model: Country,
                            },
                            
                        ]
                    },
                    {
                        model: Ratings
                    },
                ]}
      );
      let serialisedSnacks = allSnacks.map((snack) => snack.get({plain:true}));

      serialisedSnacks.map((snack) => {
            
            let ratingsTotal = 0;

            //Create an array with star rating for rendering user review star ratings
            snack.ratings.forEach((rating) => {
                ratingsTotal = ratingsTotal + rating.user_rating;
            });
            //Find ratings average
            let ratingsAvg = parseFloat((ratingsTotal / snack.ratings.length).toFixed(2));
            snack.ratingsAvg = ratingsAvg;
            snack.starArr = [];
            let goldStars = Math.floor(ratingsAvg);
            let blankStars = 5 - goldStars;
                for(let i = 0; i < goldStars; i++){
                    snack.starArr.push({color: "text-yellow-300"});
                }
                for(let i = 0; i < blankStars; i++){
                    snack.starArr.push({color: "text-gray-300"});
                }
            
        })


      res.render('browse_snacks', { 
        snacks: serialisedSnacks,
        countries: serialisedCountries,
        categories: serialisedCategories,
        logged_in: req.session.logged_in 
    });
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).send('Internal Server Error');
    }

  });

  router.post('/browse', async (req, res) => {
    try {
        let userRequest = {
            category: req.body.category,
            country: req.body.country
        }

        console.log(userRequest)

      let allCountries = await Country.findAll();
      let serialisedCountries = allCountries.map(country => country.get({ plain: true }));

      let allCategories = await Category.findAll();
      let serialisedCategories = allCategories.map(category => category.get({ plain:true }));

      let allSnacks = await Snack.findAll(
        {include: [
                    {
                        model: Snack_Country,
                        include: [
                            {
                                model: Country,
                            },
                            
                        ]
                    },
                    {
                        model: Ratings
                    },
                    {
                        model: Snack_Category,
                        include: [{model: Category}]
                    }
                ]}
      );
      let serialisedSnacks = allSnacks.map((snack) => snack.get({plain:true}));
                console.log(serialisedSnacks[0].snack_countries)
                
        if(userRequest.country){
            serialisedSnacks = serialisedSnacks.filter((snack) => {
                for(let i = 0 ; i < snack.snack_countries.length; i++){
                    if(snack.snack_countries[i].country.country_name == userRequest.country){
                        return true;
                    }
                }
                return false;
            })
        }

        if(userRequest.category){
            serialisedSnacks = serialisedSnacks.filter((snack) => {
                for(let i = 0 ; i < snack.snack_categories.length; i++){
                    if(snack.snack_categories[i].category.category_name == userRequest.category){
                        return true;
                    }
                }
                return false;
            })
        }

        serialisedSnacks.map((snack) => {
            
            let ratingsTotal = 0;

            //Create an array with star rating for rendering user review star ratings
            snack.ratings.forEach((rating) => {
                ratingsTotal = ratingsTotal + rating.user_rating;
            });
            //Find ratings average
            let ratingsAvg = parseFloat((ratingsTotal / snack.ratings.length).toFixed(2));
            snack.ratingsAvg = ratingsAvg;
            snack.starArr = [];
            let goldStars = Math.floor(ratingsAvg);
            let blankStars = 5 - goldStars;
                for(let i = 0; i < goldStars; i++){
                    snack.starArr.push({color: "text-yellow-300"});
                }
                for(let i = 0; i < blankStars; i++){
                    snack.starArr.push({color: "text-gray-300"});
                }
            
        })

    console.log(serialisedSnacks)

      res.render('browse_snacks', { 
        snacks: serialisedSnacks,
        countries: serialisedCountries,
        categories: serialisedCategories,
        logged_in: req.session.logged_in });
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).send('Internal Server Error');
    }

  });
  

router.get('/login', async(req,res) => {
    try{
        res.render('login')
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});


module.exports = router;