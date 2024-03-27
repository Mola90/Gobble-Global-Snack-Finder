const Snack_Country = require('../Models/Snack_Country')

const snackCountryData = [
    {
        country_id: 1,
        snack_id: 2
    },
    {
        country_id: 2,
        snack_id: 2
    },

]

const seedSnackCountry = async () => {
    await Snack_Country.bulkCreate(snackCountryData);
}

module.exports = seedSnackCountry;