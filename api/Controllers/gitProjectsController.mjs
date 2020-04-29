let { PythonShell } = require('python-shell')
let request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://api.github.com/users/jrivera1625/repos',
    'headers': {
        'user-agent': 'node.js'
    }
};


/**
 * @param req
 * @param res
 * @returns void
 */
/*

*/

function getGitRepo(req, res) {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log("reached data");
        return res.send({ data: response.body });
    });
    
    //console.log("reached Git controller");

    // return res.send({ data: "" })
    //  var myRepos = response.body;
    //  return res.send({data: });

}

module.exports = getGitRepo