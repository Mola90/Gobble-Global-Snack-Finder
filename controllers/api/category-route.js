 const router = require('express').Router();
const {Category } = require('../../Models');

router.get('/', async (req, res) => {
    try {
      let categoryData = await Category.findAll({attributes:["Category_name"]});
        let categoryArr = [];
        categoryData.forEach((category) => {
            categoryArr.push(category.get({ plain:true }).category_name);
        })

      res.status(200).json(categoryArr);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

  module.exports = router;