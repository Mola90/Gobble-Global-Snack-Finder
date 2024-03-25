const router = require('express').Router();
const homeRoutes = require('./home-routes');
<<<<<<< HEAD
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/',homeRoutes);
=======
const dashboard = require('./dashboard-routes');
const apiRoutes = require('./api')

router.use('/',homeRoutes);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);
>>>>>>> main

module.exports = router;