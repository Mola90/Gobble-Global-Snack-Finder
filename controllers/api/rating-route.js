
router = require('express').Router();
const {Ratings, User} = require('../../Models');


//Post a user Rating
router.post('/', async (req, res) => {
  try{
    
    const ratingData = {
    user_rating: req.body.user_rating,
    text_review: req.body.text_review,
    review_title: req.body.title_review,
    date_created: new Date(),
    user_id: req.session.user_id,
    snack_id: req.body.snack_id
  }

    const newRating = await Ratings.create(ratingData)

    res.status(200).json(newRating)

  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

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


