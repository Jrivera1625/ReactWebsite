var express = require('express');
var router = express.Router();
var getGITInfo =require('../Controllers/projectsController.mjs');
var getGITInfo2 =require('../Controllers/projectsControl.mjs');
// add more routes accordingly and functions of which controller function to access

router.use('/backend_call', getGITInfo);
router.use('/backend_call_12', getGITInfo2);

module.exports = router;
