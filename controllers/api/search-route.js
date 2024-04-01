const router = require('express').Router();
const {Snack } = require('../../Models');

router.get('/', async (req, res) => {
    try {
      const snackData = await Snack.findAll();
      console.log("snacks fetched successfully:", snackData);
      res.status(200).json(snackData);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

router.get('/browse', async (req, res) => {
  try {
    const snackData = await Snack.findAll();
    console.log("snacks fetched successfully:", snackData);
    res.status(200).json(snackData);
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).json(err);
  }
  });

  module.exports = router;