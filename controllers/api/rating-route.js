router = require('express').Router();
//const Rating = require('../../Models/Ratings');


//Post a user Rating
router.post('/', async (req, res) => {
  try{
    
    const ratingData = {
    user_rating: req.body.user_rating,
    text_review: req.body.text_review,
    date_created: req.body.date_created,
    user_id: req.session.user_id,
    snack_id: req.body.snack_id
  }
    //const newRating = await Rating.create(ratingData);

    console.log(newRating);

    res.status(200).json(newRating)

  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})


//Update a user blog post 
router.put('/update/:id', async (req, res) => {
    try{
    const blog = await Blog.findByPk(req.params.id);

    if(!blog){
      return res.status(404).json(err)
    }

    const updateBlog = Blog.update(
      {
      title: req.body.title,
      content: req.body.content
    }, 
    {
      where:{
        id: req.params.id
      }
    });

    res.status(200).json(updateBlog)
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

//Delete a user blog post 
router.delete('/', async (req,res) => {
  try{let id = req.body.id;

  const blog = await Blog.findByPk(id);

    if(!blog){
      return res.status(404).json(err)
    }

    blog.destroy();
    res.status(200).json(blog);
  } catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

module.exports = router;