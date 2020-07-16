/**Function Expressions**/
//Normal func
function hello () {
	console.log("Hello");
};

hello();

//Function Expression => assigning a function to a value

let sayHello = function () {
	console.log('Hello');	
};
 sayHello();
 //Callback Funtion

 let callHello = function (sayHello) {
 	sayHello();
 };
callHello(sayHello);