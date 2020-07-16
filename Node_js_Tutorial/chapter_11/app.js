/**Writable stream**/
let fs = require('fs');

let readStream = fs.createReadStream('../chapter_10/content.txt', 'utf8');
let writeStream = fs.createWriteStream('content.txt');

readStream.on('data', data => {
	console.log('New data has arrived');
	writeStream.write(data);
});
