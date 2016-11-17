(function() {
  var exec, start, upload;

  exec = require("child_process").exec;

  start = function(response) {
    var sleep;
    console.log("Request handler 'start' was called.");
    sleep = function(milliSeconds) {
      var results, startTime;
      startTime = new Date().getTime();
      results = [];
      while (new Date().getTime() < startTime + milliSeconds) {
        continue;
      }
      return results;
    };
    return exec("sleep 5;ls -ltrh", {
      timeout: 10000,
      maxBuffer: 20000 * 1024
    }, (function(error, stdout, stderr) {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      response.write(stdout);
      return response.end();
    }));
  };

  upload = function(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.write("Hello Upload!");
    return response.end();
  };

  exports.start = start;

  exports.upload = upload;

}).call(this);
