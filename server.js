(function() {
  var http, router, start, url;

  http = require('http');

  url = require('url');

  router = require('./router');

  start = function(route, handle) {
    var onRequest;
    onRequest = function(request, response) {
      var pathname, postData;
      postData = "";
      pathname = url.parse(request.url).pathname;
      request.setEncoding("utf8");
      request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
        return console.log("Received POST data chunk '" + postDataChunk + "'.");
      });
      return request.addListener("end", function() {
        return route(handle, pathname, response, postData);
      });
    };
    http.createServer(onRequest).listen(8888);
    return console.log('Server has started.');
  };

  exports.start = start;

}).call(this);
