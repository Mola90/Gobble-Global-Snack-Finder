const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboard = require('./dashboard-routes');
const apiRoutes = require('./api')

router.use('/',homeRoutes);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);

module.exports = router;