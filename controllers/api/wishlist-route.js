router = require('express').Router();
const Item = require('../../Models/Item');


//Post a user Rating
router.post('/', async (req, res) => {
  try{
    
    const listData = {
        snack_id: req.body.snack_id,
        user_id: 1
    }

    const newList = await Item.create(listData)

    res.status(200).json(newList)
  } catch(err){
    console.log(err);
    res.status(400).json(err);
  }
});




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


