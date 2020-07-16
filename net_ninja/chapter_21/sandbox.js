/****Document Object Model(DOM)****/
/*		Document Object Model(DOM)
What is it?
It is an document created by the browser when an html documents loads inside it.
When the html document is loaded in the browser, the browser creates an object modelling the document(Document Object)
What does it do?
It used to Interact eith the html document(i. change, add, remove,... content)
How does it do it work?
document.

The DOM sees the html as hierachy of nodes
html(root node)-------body-----div
 |						/\
 |					   /  \
 |					  h1   div
 |			   (text node) |\
 |	        			   | \
 |				           |  \
 |						   p  p->text node
 head	
 |
 title->text node

 we can use the dom node to interact with the web page
*/
//Querying the DOM
const para = document.querySelector('p');
//Selects the 1st p tag it come across
console.log(para);

const paragraph = document.querySelector('.error');
//Selects an node with the class of error
console.log(paragraph);
const param = document.querySelector('div.error');
 //Select div node with a class of error to be specific
console.log(param);
//Using the browser to find the selector
const header = document.querySelector('body > h1');
console.log(header);

//Grab all similar nodes
const paras = document.querySelectorAll('p');// these will be stored in a node list called paras
console.log(paras);
//We can get an element by seletcing its index;
paraOne = paras[0];
console.log(paraOne);
paras.forEach(para => {
	console.log(para);
});
const errors = document.querySelectorAll('.error');
console.log(errors);