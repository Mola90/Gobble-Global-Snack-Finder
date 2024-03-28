const router = require('express').Router();
const {User } = require('../../Models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      console.log("user fetched successfully:", userData);
      res.status(200).json(userData);
    } catch (err) {
      console.error("Error occurred", err);
      res.status(500).json(err);
    }
  });

router.post('/signup', async (req,res) => {
  try { 

    const hashedPassword = await bcrypt.hash(req.body.Password, 30);
    const dbUserData = await User.create({
      country: req.body.username,
      DOB: req.body.DOB,
      username: req.body.Username,
      email: req.body.Email,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

module.exports = router;
