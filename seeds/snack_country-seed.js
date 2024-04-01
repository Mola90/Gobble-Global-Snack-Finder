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

]

const seedSnackCountry = async () => {
    await Snack_Country.bulkCreate(snackCountryData);
}

module.exports = seedSnackCountry;