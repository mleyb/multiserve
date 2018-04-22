const http = require('http')
const os = require('os')
const port = 8082

const hostname = os.hostname();

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello from a Node service on host ' + hostname)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log('Server is listening on port', port)
})