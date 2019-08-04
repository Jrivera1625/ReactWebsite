var express = require('express');
var router = express.Router();
var getSeasonality =require('../Controllers/projectsController.mjs');
// add more routes accordingly

router.use('/backend_call', getSeasonality);

module.exports = router;
