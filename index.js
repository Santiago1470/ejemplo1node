'use sctrict';
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Hola Mundo');
});
server.listen(5000);