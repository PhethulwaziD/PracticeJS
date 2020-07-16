/*******Get Element by ID**********/
const title = document.getElementById('page_title');// we do not need the css(# for id) selector as it has been specified
console.log(title);
/*Get Elements by their class name*/
const errors = document.getElementsByClassName('error');
// we do not need the css(. for class) selector as it has been specified
//This returns an html collectiion of all the nodes that have the class name of errors
console.log(errors);
console.log(errors[1]);
//We cannot use forEach Method on this array
/*errors.forEach(error => {
	console.log(error);
});*/

/**Get Elements by their tag name**/
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0]);
