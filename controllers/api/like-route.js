router = require('express').Router();
const Like = require('../../Models/Like');


//Post a user Rating
router.post('/', async (req, res) => {
  try{
    
    const LikeData = {
        snack_id: req.body.snack_id,
        user_id: 1
    }

    const newLike = await Like.create(LikeData)

    res.status(200).json(newLike)
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
});


  router.delete('/:id', async (req, res) => {
  try{

    const like = await Like.findOne({
        where: {
            snack_id: req.params.id,
            user_id: 1
        }
    })

    if(!like){
        res.status(404).json("Like not found")
    };
    console.log(like);
    let deleteLike = await like.destroy();

    res.status(200).json(deleteLike)
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;


