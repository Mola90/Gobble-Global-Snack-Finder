router = require('express').Router();

const Like = require('../../Models/Like');

//Get likes by user ID
router.get('/:id', async (req, res) => {
  try {
    const likeData = await Like.findAll({
      where:{
        user_id: req.params.id
      }
    });

    if (!likeData) {
      res.status(404).json({ message: 'This user has no likes' });
      return;
    }

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post a user Like
router.post('/', async (req, res) => {
  try{
    
    const LikeData = {
        snack_id: req.body.snack_id,
        user_id: req.session.user_id
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
        e
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


