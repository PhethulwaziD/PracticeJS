/**Routing**/
let fs = require('fs');
let http =  require('http');

let server = http.createServer((request, response) => {
	if (request.url === '/index' || request.url === '/'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('index.html', 'utf8').pipe(response);
	} else if (request.url === '/contact'){
		response.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream('contact.html', 'utf8').pipe(response);
	} else if (request.url === '/api') {
		let dataObject = {
			name : "Phethulwazi",
			work : "Programmer",
			age : "23"
		}
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(dataObject));
	} else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream('404.html', 'utf8').pipe(response);
	}

});

server.listen(1998,'localhost');
console.log('Listening...');