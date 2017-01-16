var https = require('https');


function getHTML (options, callback) {
  var dataReceived = "";

  https.get(options, function(response){
    response.setEncoding('utf-8');

    // response.on('data', function(data) {
    //   dataReceived += data;
    // });

    response.on('data', callback);

    // response.on('end', function() {
    //   console.log(dataReceived);
    // });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);