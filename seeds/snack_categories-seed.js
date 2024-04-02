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
    {
        category_id: 7,
        snack_id: 2
    },
    {
        category_id: 2,
        snack_id: 2
    },
    {
        category_id: 4,
        snack_id: 3
    },
    {
        category_id: 7,
        snack_id: 4
    },
    {
        category_id: 3,
        snack_id: 5
    },
    {
        category_id: 5,
        snack_id: 5
    },
    {
        category_id: 3,
        snack_id: 6
    },
    {
        category_id: 5,
        snack_id: 6
    },
    {
        category_id: 3,
        snack_id: 7
    },
    {
        category_id: 5,
        snack_id: 7
    },
    {
        category_id: 2,
        snack_id: 8
    },
    {
        category_id: 5,
        snack_id: 8
    },
    {
        category_id: 9,
        snack_id: 9
    },
    {
        category_id: 10,
        snack_id: 9
    },
    {
        category_id: 5,
        snack_id: 10
    },
    {
        category_id: 4,
        snack_id: 10
    },
]

const seedSnackCategory = async () => {
    await Snack_Category.bulkCreate(snackCategoryData);
}

module.exports = seedSnackCategory;