const http = require('http');
const routes = require('./routes');

// Alternative 1
// const server = http.createServer(routes);

// Alternative 2
const server = http.createServer(routes.handler);
console.log(routes.text);

server.listen(3000);