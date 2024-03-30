router = require('express').Router();
const {Snack, User, Category, Country, Snack_Country, Snack_Category} = require('../../Models');
const { associations } = require('../../Models/Category');

router.get('/', async (res,req) => {
    try{

    }catch(err){
        
    }
});

// Route Handler for POST Request to add a new snack to a database. 
router.post('/', async (req, res) => {
    try{
        const snackData = {
            snack_name: req.body.productName,
            brand_name: req.body.productBrand,
            snack_image: req.body.productImage,
            user_id: 1,
            date_created: new Date()
        }

        console.log(snackData)
        //Find all snacks, see if snack with the same name already exists
        let allSnacks = await Snack.findAll({
            attributes: ['snack_name']
        });

        const doesSnackExist = allSnacks.some(snack => snack.snack_name.toLowerCase() === snackData.snack_name.toLowerCase());

        if(doesSnackExist){
            return res.status(400).json("Snack exists")
        }

        //Submit snack if appropriate
        let addSnack = await Snack.create(snackData);

        //Find all countries that match categories list and their ids
        let allCountries = await Country.findAll();
        console.log(allCountries);
        let countryAssociations = [];
        const countries = req.body.productCountriesArr;
        allCountries.forEach((country) => {
            let serialisedCountry = country.get({ plain:true });
            let countryName = serialisedCountry.country_name.toLowerCase();
            if(countries.includes(countryName)){
                let association = {
                    country_id: serialisedCountry.id,
                    snack_id: addSnack.id
                }
                countryAssociations.push(association);
            }
        });
        console.log("associations", countryAssociations);

        //Create a country - snack association for each matching country
        let newCountryAssociation = await Snack_Country.bulkCreate(countryAssociations);

        //Find all categories that match countries list and their ids 
        let allCategories = await Category.findAll();
        let categoryAssociations = [];
        const categories = req.body.productCategoriesArr;
        allCategories.forEach(async (category) => {
            let serialisedCategory = category.get({ plain:true });
            let categoryName = serialisedCategory.category_name.toLowerCase();
            let association;
            if(categories.includes(categoryName)){
                association = {
                    category_id: serialisedCategory.id,
                    snack_id: addSnack.id
                }
                categoryAssociations.push(association);
            } else{
                let newCategory = await Category.create({category_name: categoryName});
                association = {
                    category_id: newCategory.id,
                    snack_id: addSnack.id
                }
                console.log(newCategory);
            }
        });

        let newCategoryAssociation = await Snack_Category.bulkCreate(categoryAssociations);

        console.log(newCountryAssociation, newCategoryAssociation, addSnack)
        res.status(200).json(snackData)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;