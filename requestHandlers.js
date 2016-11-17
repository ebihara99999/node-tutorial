(function() {
  var exec, start, upload;

  exec = require("child_process").exec;

  start = function(response) {
    var content, sleep;
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
    content = "empty!!";
    exec("sleep 10; ls -ltrh", (function(error, stdout, stderr) {
      content = stdout;
      return content;
    }));
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.write(content);
    return response.end();
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
