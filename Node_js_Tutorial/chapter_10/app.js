/**Readable streams**/

let fs = require('fs');

let readStream = fs.createReadStream('content.txt', 'utf8');

readStream.on('data', data => {
	console.log('new data....');
	console.log(data);
});