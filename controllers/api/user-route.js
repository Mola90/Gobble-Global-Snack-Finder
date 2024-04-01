const router = require('express').Router();
const {User, Country} = require('../../Models');
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


router.post('/sign-up', async (req,res) => {
  try { 
    let countryID = await Country.findOne({where: {country_name: req.body.country}})

    console.log(countryID)
    
    const dbUserData = await User.create({
      country_id: countryID.id,
      DOB: req.body.DOB,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });



    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.post('/email', async(req, res) => {
  try{
    let propEmail = await User.findOne({ where: {email: req.body.email}});
    console.log(propEmail, "meail")

    if(!propEmail){
      return res.status(200).json("No matching email found");
    }


    res.status(400).json(err);
  } catch(err){
    console.error(err);
    res.status(500).json(err)
  }
});

router.post('/username', async(req, res) => {
  try{
    let propUsername = await User.findOne({ where: {username: req.body.username}});

    console.log("username", propUsername)
    if(propUsername){
      return res.status(400).json(err);
    }
    
    res.status(200).json("No matching username found");

  } catch(err){
    console.error(err);
    res.status(500).json(err)
  }
});

router.get('/signup', async (req, res) => {
  try {
    let allCountries = await Country.findAll();
    let serialisedCountries = allCountries.map(country => country.get({ plain: true }));
    res.render('signup', { countries: serialisedCountries });
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/login', async(req,res) => {
  try{
      res.render('login')
  } catch(err){
      console.log(err);
      res.status(400).json(err);
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
      console.log(isValidPassword);
      if (!isValidPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
  

router.put('/update', async(req, res) => {
  try{

    let image = req.body.newUrl;

    let user = await User.findByPk(req.session.user_id);

    if(!user){
      return res.status(404).json("User not found")
    }
    
    await User.update({profile_picture: image}, {where: {id: req.session.user_id}});

    res.status(200).json(user)
  } catch(err){
    console.error(err);
    res.status(500).json(err)
  }
})

  module.exports = router;

