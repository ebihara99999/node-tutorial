# This is the main part of web server.

http = require('http')
url = require('url')
router = require('./router')
start = (route, handle)->
  onRequest = (request, response) ->
    postData = ""
    pathname = url.parse(request.url).pathname

    request.setEncoding("utf8")
    request.addListener "data", (postDataChunk) ->
      postData += postDataChunk
      console.log "Received POST data chunk '#{postDataChunk}'."

    request.addListener "end", ->
      route handle, pathname, response, postData

  http.createServer(onRequest).listen 8888
  console.log 'Server has started.'

exports.start = start
