const http = require('node:http');
const { url } = require('node:inspector');
const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' && request.method === 'GET') {{response.end("Hello, Galvanize!");}}
  response.statusCode = 404;
  response.end();
});
server.listen(3000, "localhost", () => console.log(`Server is running on localhost:3000`));
