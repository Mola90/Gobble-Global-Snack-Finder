const Snack_Country = require('../Models/Snack_Country')

const snackCountryData = [
    {
        country_id: 9,
        snack_id: 1
    },
    {
        country_id: 9,
        snack_id: 2
    },
    {
        country_id: 9,
        snack_id: 3
    },
    {
        country_id: 9,
        snack_id: 4
    },
    {
        country_id: 9,
        snack_id: 5
    },
    {
        country_id: 65,
        snack_id: 6
    },
    {
        country_id: 65,
        snack_id: 7
    },
    {
        country_id: 65,
        snack_id: 8
    },
    {
        country_id: 65,
        snack_id: 9
    },
    {
        country_id: 65,
        snack_id: 10
    },
    {
        country_id: 58,
        snack_id: 11
    },
    {
        country_id: 58,
        snack_id: 12
    },
    {
        country_id: 58,
        snack_id: 13
    },
    {
        country_id: 58,
        snack_id: 14
    },
    {
        country_id: 58,
        snack_id: 15
    },
    {
        country_id: 131,
        snack_id: 16
    },
    {
        country_id: 131,
        snack_id: 17
    },
    {
        country_id: 131,
        snack_id: 18
    },
    {
        country_id: 131,
        snack_id: 19
    },
    {
        country_id: 131,
        snack_id: 20
    },

]

const seedSnackCountry = async () => {
    await Snack_Country.bulkCreate(snackCountryData);
}

module.exports = seedSnackCountry;