(function() {
  var http, router, start, url;

  http = require('http');

  url = require('url');

  router = require('./router');

  start = function(route, handle) {
    var onRequest;
    onRequest = function(request, response) {
      var pathname;
      pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      route(handle, pathname, response);
    };
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
  };

  exports.start = start;

}).call(this);
