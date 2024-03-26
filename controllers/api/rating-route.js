const router = require('express').Router();
const {Ratings } = require('../../Models');

router.get('/', async (req, res) => {
    try {
      const ratingData = await Ratings.findAll();
      console.log("Ratings fetched successfully:", ratingData);
      res.status(200).json(ratingData);
    } catch (err) {
      console.error("Error occurred while Ratings:", err);
      res.status(500).json(err);
    }
  });

  module.exports = router;