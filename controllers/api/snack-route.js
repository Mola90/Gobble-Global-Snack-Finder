router = require('express').Router();

router.get('/', async (res,req) => {
    try{

    }catch(err){
        
    }
});

router.post('/', async (res,req) => {
    try{
        const snackData = {
            snack_name: req.body.productName,
            country: req.body.productCountries,
            brand_name: req.body.productBrand,

        }
    }catch(err){
        
    }
})

module.exports = router;