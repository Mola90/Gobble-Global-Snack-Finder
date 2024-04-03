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
        snack_id: 11
    },
    {
        category_id: 4,
        snack_id: 12
    },
    {
        category_id: 4,
        snack_id: 13
    },
    {
        category_id: 12,
        snack_id: 14
    },
    {
        category_id: 5,
        snack_id: 15
    },
    {
        category_id: 3,
        snack_id: 16
    },
    {
        category_id: 25,
        snack_id: 17
    },
    {
        category_id: 25,
        snack_id: 18
    },
    {
        category_id: 3,
        snack_id: 19
    },
    {
        category_id: 25,
        snack_id: 21
    },
    {
        category_id: 3,
        snack_id: 22
    },
    {
        category_id: 28,
        snack_id: 23
    },
    {
        category_id: 3,
        snack_id: 24
    },
    {
        category_id: 25,
        snack_id: 25
    },
    {
        category_id: 7,
        snack_id: 26
    },
    {
        category_id: 7,
        snack_id: 27
    },
    {
        category_id: 33,
        snack_id: 28
    },
    {
        category_id: 7,
        snack_id: 29
    },
    {
        category_id: 26,
        snack_id: 30
    },
]


const seedSnackCategory = async () => {
    await Snack_Category.bulkCreate(snackCategoryData);
}

module.exports = seedSnackCategory;