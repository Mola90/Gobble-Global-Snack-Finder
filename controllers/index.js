const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboard = require('./dashboard-routes');
const browse = require('./browse-routes');

router.use('/',homeRoutes);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);


module.exports = router;
