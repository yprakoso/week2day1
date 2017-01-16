var https = require('https');

function getAndPrintHTML(){
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var dataReceived = "";

  https.get(requestOptions, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data) {
      dataReceived += data;
    });

    response.on('end', function(){
      console.log(dataReceived);
    });
  });
}

getAndPrintHTML();