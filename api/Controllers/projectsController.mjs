let {PythonShell} = require('python-shell')
/**
 * @param req
 * @param res
 * @returns void
 */
function getGITInfo(req, res) {
  
console.log("reached controller");
  
return res.send({data:"stuff seasonality"})

}

module.exports= getGITInfo