/**Pipes**/
let http = require('http');
let fs = require('fs');

let server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	let readStream = fs.createReadStream('content.txt');
	//let writeStream = fs.createWriteStream('content.txt');
	//response.end('Hello Lwazi');
	readStream.pipe(response);

});


server.listen(1996, 'localhost');
console.log('listening...');