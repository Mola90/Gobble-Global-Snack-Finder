const router = require('express').Router();
const {User } = require('../../Models');

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


  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res.status(400).json({ message: 'No user found with this email address!' });
        return;
      }
  
      const isValidPassword = await userData.checkPassword(req.body.password);
      if (!isValidPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = userData.id;
        req.session.username = userData.username;
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  

  module.exports = router;
