router = require('express').Router();
const {Snack, User, Category, Country, Snack_Countries, Snack_Category} = require('../../Models');
const { associations } = require('../../Models/Category');

router.get('/', async (res,req) => {
    try{

    }catch(err){
        
    }
});

router.post('/', async (req, res) => {
    try{
        const snackData = {
            snack_name: req.body.productName,
            brand_name: req.body.productBrand,
            user_id: 1
        }

        console.log(snackData)
        //Find all snacks, see if snack with the same name already exists
        let allSnacks = await Snack.findAll({
            attributes: ['snack_name']
        });

        const doesSnackExist = allSnacks.some(snack => snack.snack_name.toLowerCase() === snackData.snack_name.toLowerCase());

        console.log(doesSnackExist);

        if(doesSnackExist){
            return res.status(400).json("Snack exists")
        }

        //Submit snack if appropriate
        let addSnack = await Snack.create(snackData);

        //Find all categories that match categories list and their ids
        let allCountries = await Country.findAll();
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

                console.log("Country ID", serialisedCountry.id);
                console.log("Snack ID", addSnack.id)

                countryAssociations.push(association);
            }
        });
        console.log("associations", countryAssociations);
        //Create a country - snack association for each matching country
        //let newCountryAssociation = await Snack_Countries.bulkCreate(countryAssociations);
        countryAssociations.forEach(async (countryA) => {
            console.log("This is the single CountryA", countryA)
            let newAssociation = await Snack_Countries.create(countryA)
            console.log("Log new association", newAssociation);
        })
        //console.log(newCountryAssociation)
        

        //Create snack_category to link snack_id and category

        //Find all countries that match countries list and their ids 
        let allCategories = await Category.findAll();
        let categoryAssociations = [];
        const categories = req.body.productCategoriesArr;
        allCategories.forEach((category) => {
            let serialisedCategory = category.get({ plain:true });
            let categoryName = serialisedCategory.category_name.toLowerCase();
            if(categories.includes(categoryName)){
                let association = {
                    category_id: serialisedCategory.id,
                    snack_id: addSnack.id
                }

                categoryAssociations.push(association);
            }
        });

        console.log("Category Associations", categoryAssociations);

        let newCategoryAssociation = await Snack_Category.bulkCreate(categoryAssociations);


        res.status(200).json(snackData)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;