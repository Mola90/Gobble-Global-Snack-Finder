const router = require('express').Router();
const {Snack, Ratings, Snack_Category, Snack_Country, Category, Country} = require('../Models')



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

        console.log(serialisedSnack)
        let snackData = {
            snack_name: serialisedSnack.snack_name,
            snack_brand: serialisedSnack.snack_brand,
            snack_image: serialisedSnack.snack_image,
            snack_rating: serialisedSnack.rating
        }
        res.render('single_snack', snackData)
     }catch(err){
        console.log(err);
        res.status(400).json(err);
    });
      
  
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