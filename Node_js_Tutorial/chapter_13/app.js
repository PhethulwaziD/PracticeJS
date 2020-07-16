/**Serving HTML Pages**/
let fs = require('fs');
let http = require('http');

let server = http.createServer((request, response) => {
	console.log(request);
	response.writeHead(200, {'Content-Type': 'text/html'});
	let readStream = fs.createReadStream('index.html', 'utf8');
	readStream.pipe(response);
});

server.listen(1994, 'localhost');
console.log('listening...');