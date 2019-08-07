let {PythonShell} = require('python-shell')
/**
 * @param req
 * @param res
 * @returns void
 */
function getGITInfo2(req, res) {
    // Query
    //var spawn = require("child_process").spawn;
    
    //var process = spawn('py',["./my_script.py"] );
    console.log("reached controller",req.body);
// Takes stdout data from script which executed
// with arguments and send this data to res object
    //process.stdout.on('data', function(data) {

    
    return res.send({data:"stuff seasonality43234234234"})
//})
}

module.exports= getGITInfo2