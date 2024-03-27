const router = require('express').Router();


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



module.exports = router;