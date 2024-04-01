const router = require('express').Router();
const {Country } = require('../../Models');

router.get('/', async (req, res) => {
    try {
      let countryData = await Country.findAll({attributes:["country_name"]});
        let countryArr = [];
        countryData.forEach((country) => {
            countryArr.push(country.get({ plain:true }).country_name);
        })

      res.status(200).json(countryArr);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

  router.get('/signup', async (req, res) => {
    try {
      let countryData = await Country.findAll({attributes:["country_name"]});
        let countryArr = [];
        countryData.forEach((country) => {
            countryArr.push(country.get({ plain:true }).country_name);
        })

      res.status(200).json(countryArr);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

  router.get('/browse', async (req, res) => {
    try {
      let countryData = await Country.findAll({attributes:["country_name"]});
        let countryArr = [];
        countryData.forEach((country) => {
            countryArr.push(country.get({ plain:true }).country_name);
        })

      res.status(200).json(countryArr);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

  module.exports = router;