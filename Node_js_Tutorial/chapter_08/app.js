/**Creating and Removing directories**/
let fs = require('fs');
/*
fs.writeFileSync('write.txt', 'I wrote on this file');
let file = fs.readFileSync('write.txt', 'utf8')
console.log(file);
*/
/**Removing/Deleting a file**/
//fs.unlink('write.txt');

/**Creating directory (Sync)**/
//fs.mkdirSync('file');

/**Deleting directory (Sync)**/
//fs.rmdirSync('file');

/**Creating Directory aSync**/
/*
fs.mkdir('file', () => {
	fs.readFile('write.txt', 'utf8', (error, data) => {
		console.log(data);
	});
});
*/

/**Deleting Directory aSync**/
fs.rmdir('file');