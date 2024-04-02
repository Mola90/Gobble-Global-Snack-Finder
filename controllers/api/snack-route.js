router = require('express').Router();
const {Snack, User, Category, Country, Snack_Country, Snack_Category} = require('../../Models');



//Get snacks by user who submited them.
router.get('/:id', async (req, res) => {
    try {
      const snackData = await Snack.findAll({
        where:{
          user_id: req.params.id
        }
      });
  
      if (!snackData || snackData.length == 0) {
        res.status(404).json({ message: 'This user has not submitted any snacks' });
        console.log("this is an 404");
        return;
      }
  
      res.status(200).json(snackData);
      console.log("this is an success");
      console.log(snackData);
    } catch (err) {
      res.status(500).json(err);
      console.log("this is an error");
    }
  });

// Route Handler for POST Request to add a new snack to a database. 
router.post('/', async (req, res) => {
    try{
        const snackData = {
            snack_name: req.body.productName,
            brand_name: req.body.productBrand,
            snack_image: req.body.productImage,
            user_id: req.session.user_id,
            date_created: new Date()
        }

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

        //Create a country - snack association for each matching country
        let newCountryAssociation = await Snack_Country.bulkCreate(countryAssociations);

        //Find all categories that match countries list and their ids 
        let allCategories = await Category.findAll();
        allCategories.map((category) => category.get({plain:true}));
        let existingCategoryNames = allCategories.map((category) => category.category_name);

        console.log(existingCategoryNames)
        let categoryAssociations = [];
        const categories = req.body.productCategoriesArr;

        categories.forEach(async (category) => {
          let categoryName = category.toLowerCase();
          console.log(categoryName)
          let association;
          if(existingCategoryNames.includes(categoryName)){
                let matchingCategory = allCategories.find(item => item["category_name"] === categoryName);
                console.log(matchingCategory)
                association = {
                    category_id: matchingCategory.id,
                    snack_id: addSnack.id
                }
                console.log("EXISTS",association)
                categoryAssociations.push(association);
            } else{
                let newCategory = await Category.create({category_name: categoryName});
                association = {
                    category_id: newCategory.id,
                    snack_id: addSnack.id
                }
                console.log("exists NOW",association)
                categoryAssociations.push(association);
            }
        })

        let newCategoryAssociation = await Snack_Category.bulkCreate(categoryAssociations);

        res.status(200).json(snackData)
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  try{

    const snack = await Snack.findOne({
        where: {
            id: req.params.id,
            user_id: req.session.user_id
        }
    })

    if(!snack){
        res.status(404).json("Snack not found")
    };
    console.log(snack);
    let deleteSnack = await snack.destroy();

    res.status(200).json(deleteSnack)
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;