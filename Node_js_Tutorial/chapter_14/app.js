/**Serving Jason**/
let fs = require('fs');
let http = require('http');

let server = http.createServer((request, response) => {
	response.writeHead(200, {'Conetnt-Type': 'application/json'});
	//let readStream = fs.createReadStream('', 'utf8');
	//readStream.pipe(response);
	let obj = {
		name: "Phethulwazi",
		Job: "Software Developer",
		age: "23"
	};
	response.end(JSON.stringify(obj));
	response.end(obj.name);
});
server.listen(2002, 'localhost');
console.log('Listening...')