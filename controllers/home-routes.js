const router = require('express').Router();



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

router.get('/snack', async(req,res) => {
    try{
        res.render('single_snack')
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