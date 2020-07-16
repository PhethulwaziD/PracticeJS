/**Clients and Server**/
/**Creating Server**/
let http = require('http');

let server = http.createServer((request, response) => {
	console.log('request: '+request);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Lwazi');
});

server.listen(1996, '127.0.0.1');
console.log("listening...");