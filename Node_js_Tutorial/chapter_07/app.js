/**Reading and writing file*/
let fs = require('fs');
/**Rading using readFileSync method**/
/*
	readFileSync -> a synchronous method
	for reading file, no other code will be
	until the completion of this one 
*/

let file = fs.readFileSync('file.txt', 'utf8');
/*
	the  parameters of the method readFileSync
	are that of the file we want to read
	and the second param is the character 
	encoding(How the file is to be decoded)
*/
console.log(file);

/**Writing**/
fs.writeFileSync('write.txt', file);
/*
	the  parameters of the method writeFileSync
	are that of the file we want to write to
	*NB if the file does no exist it will be
	automatically created
	and the second param is the content of the file
*/
let write = fs.readFileSync('write.txt','utf8');
console.log(write);


/*
	aSync -> a non synchronous method
	for reading and writing files, executed 
	all at once with code writtem after
*/
/**Reading using async**/

fs.readFile('write.txt','utf8', (err, data) => {
	console.log(data);
});
/**Writing using async**/
//fs.writeFile('writeTwo.txt', (err, 'lwazi') => {
//	console.log(err);
//});