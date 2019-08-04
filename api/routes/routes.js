var express = require('express');
var router = express.Router();
var getSeasonality = require('../Controllers/projectsController.mjs');



router.route('/backend_call').post(getSeasonality);


module.exports = router;