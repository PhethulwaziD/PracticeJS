//Functions
/*Function Declaration*/
/*function  greet(){
	console.log("Hello");
}*/

//Finction Expression
const speak = function(){
	console.log('hi');
};

greet();
greet();
speak();
speak();


/*Hoisting-> Declared functions are hoisted to the top of the file , thus are declared first*/
function  greet(){
	console.log("Hello");
}

/************Arrow Function*******************/
//Make functions smaller
/*
	data_type function_name = (Parameters) => {
		Body;
	};
*/
const calArea = (radius) => (3.14 * radius**2);

const area = calArea(5);
console.log(area);

const dumela = () => ("Hello word");
console.log(dumela());


const bill = (products, tax) => {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return (total);
};

let products = [24, 56, 20, 1, 19];
const tax = 0.15;
const total = bill(products, tax);
console.log(total);
/******Functions And Methods*******/
/************Functions*************/
// A block of code to process data when envoked
const lotsha = () => 'Hello there';
let greeting = lotsha();
console.log(greeting);
/*************Methods**************/
// Methods are functions associated with an object(array) or data(string) type
//we envoke using the dot operator
name = "Phethulwazi";
let res = name.toUpperCase();
console.log(res);