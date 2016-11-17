exec = require("child_process").exec

start = (response) ->
  console.log "Request handler 'start' was called."

  sleep = (milliSeconds) ->
    startTime = new Date().getTime()
    while new Date().getTime() < startTime + milliSeconds
      continue

  content = "empty!!"

  exec "sleep 10; ls -ltrh", ((error, stdout, stderr) ->
    content = stdout
    return content
    )
  response.writeHead 200, {"Content-Type": "text/plain"}
  response.write content
  response.end()

upload = (response) ->
  console.log "Request handler 'upload' was called."
  response.writeHead 200, {"Content-Type": "text/plain"}
  response.write "Hello Upload!"
  response.end()

exports.start = start
exports.upload = upload
