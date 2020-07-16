/**The Global Object**/
console.log('Hello');
//Methodds on the globa object
setTimeout( ()=> {
	console.log("2 seconds later")
}, 2000);

let time = 0;

/*setInterval( () => {
	console.log(time);
	if (time > 5) {
		clearInterval(timer);
	}
	time += 2;
}, 2000);
*/
console.log(__dirname);
console.log(__filename);