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

module.exports = router;