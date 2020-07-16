//Strings
console.log("Hello Lwazi");

let email = "pdonga@student.wethinkcode.co.za";
console.log(email);
//Concatenattion
let name = "Phethulwazi",
	sname = "Donga";
	fname = name +" "+ sname;
//+ is use to concatebation in js	
console.log(fname);

//Getting chars->extrating chars
console.log(name[0]);

//String length->getting the length of a string
console.log(fname.length);

//string function->code that performs a particular task
//string methods-> function associated with a particular object or data type
console.log(sname.toUpperCase());//we add brackets in methods
//we can assing a var ton the result
let lower = sname.toLowerCase();
console.log(lower); //*some methods  do not alter the value

//some methods require that we pass in a param
let index = email.indexOf('@');
console.log(index);

//Template Strings
const title = "Best book by me";
const author = "Lwazi";
const likes = 22;
//concatenation way;
let str = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(str);

//template string way-enables us inject variables directly into the strings;
let str2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(str2);

//creating html templates
let html = `
	<h2>${title}</h2>
	<p>By ${author}</p>
	<span>This blog has ${likes}likes</span>`;
console.log(html);