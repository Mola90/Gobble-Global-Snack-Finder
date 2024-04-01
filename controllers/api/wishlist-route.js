router = require('express').Router();
const Wishlist = require('../../models/Wish-List');


router.get('/', async (req, res) => {
  try {
    const wishData = await Wishlist.findAll();
    console.log("user fetched successfully:", wishData);
    res.status(200).json(wishData);
  } catch (err) {
    console.error("Error occurred", err);
    res.status(500).json(err);
  }
});

// get wish list by user pk
router.get('/:id', async (req, res) => {
  try {
    const wishData = await Wishlist.findAll({
      where:{
        user_id: req.params.id
      }
    });

    if (!wishData) {
      res.status(404).json({ message: 'No no wish data by that id!' });
      return;
    }

    res.status(200).json(wishData);
  } catch (err) {
    res.status(500).json(err);
  }
});





// //Post a user Rating
// router.post('/', async (req, res) => {
//   try{
    
//     const listData = {
//         snack_id: req.body.snack_id,
//         user_id: 1
//     }

//     const newList = await Item.create(listData)

//     res.status(200).json(newList)
//   } catch(err){
//     console.log(err);
//     res.status(400).json(err);
//   }
// });




router.delete('/:id', async (req, res) => {
  try{

    const item = await Item.findOne({
        where: {
            snack_id: req.params.id,
            user_id: 1
        }
    })

    if(!item){
        res.status(404).json("Snack not found")
    };

    let deleteItem = await item.destroy();

    res.status(200).json(deleteItem)
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;


