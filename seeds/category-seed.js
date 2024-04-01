const Category = require('../models/Category')

const categoryData = [
    {
        category_name: 'Snacks',
    },
    {
        category_name: 'Sweet snacks',
    },
    {
        category_name: 'Biscuits',
    },
    {
        category_name: 'Biscuits and cakes',
    },
    {
        category_name: 'Cocoa and its products',
    },
    {
        category_name: 'Confectionaries',
    },
    {
        category_name: 'Chocolate Candies',
    },
    {
        category_name: 'Bonbons',
    },
    {
        category_name: 'Candies',
    },
    {
        category_name: 'Gummi candies',
    },
    {
        category_name: 'Alcoholic beverages',
    },
    {
        category_name: 'Beers',
    },
    {
        category_name: 'Ales',
    },
    {
        category_name: 'Pale ales',
    },
    {
        category_name: 'India Pale Ale(IPA)',
    },
    {
        category_name: 'Craft beers',
    },
    {
        category_name: 'Chocolate biscuits',
    },
    {
        category_name: 'Milk chocolate biscuits',
    },
    {
        category_name: 'Chocolates with hazelnuts',
    },
    {
        category_name: 'Milk chocolates with hazelnuts',
    },
    {
        category_name: 'Chocolate spreads',
    },
    {
        category_name: 'Hazlenut spreads',
    },
    {
        category_name: 'Filled chocolates',
    },
    {
        category_name: 'Plant-based foods and beverages',
    },
    {
        category_name: 'Salty snacks',
    },
    {
        category_name: 'Chips and fries',
    },
    {
        category_name: 'Appetizers',
    },
    {
        category_name: 'Corn chips',
    },
    {
        category_name: 'Condiments',
    },
    {
        category_name: 'Sauces',
    },
    {
        category_name: 'Dips',
    },
    {
        category_name: 'Fermented foods',
    },
    {
        category_name: 'Creams',
    },

];

const seedCategories = async () => {
    await Category.bulkCreate(categoryData);
}

module.exports = seedCategories;