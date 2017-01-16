var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print_1337(html) {
  console.log('not yet');
}

getHTML(requestOptions, print_1337);

module.export = print_1337;