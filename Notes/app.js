let express = require('express');
//console.log(express);
let app  = express();
//console.log(app);
/**Object Constructors**/
function Person (name, eyeColor, age) {
	this.name = name;
	this.eyeColor = eyeColor;
	this.age = age;
	this.updateAge = function () {
		return ++this.age;
	};
}
//console.log(Person);
let personOne = new Person('Chunkie', 'brown', 25);
console.log(personOne);
console.log(personOne.name);
console.log(personOne.updateAge());
