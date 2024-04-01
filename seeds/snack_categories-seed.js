const Snack_Category = require('../Models/Snack_Category')

const snackCategoryData = [
    {
        category_id: 1,
        snack_id: 1
    },
    {
        category_id: 2,
        snack_id: 1
    },
]

const seedSnackCategory = async () => {
    await Snack_Category.bulkCreate(snackCategoryData);
}

module.exports = seedSnackCategory;