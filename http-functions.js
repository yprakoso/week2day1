var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function(response){
    response.setEncoding('utf-8');
    response.on('data', callback);
  });
};