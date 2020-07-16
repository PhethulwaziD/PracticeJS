/**Event Module**/
let events = require('events');

//events is a core module
//Can be used to create custom events

let emitter = new events.EventEmitter();
//EventEmitter is a class
// a class is a container of properties and methods
emitter.on('roar', msg => {
	console.log(msg);
});
/*
on is a method that takes on the event name 
and the function that must be executed 
when the event is emitted
*/
emitter.emit('roar', 'roar');
//calling the event with funtions

/**The Utility Module**/
let util = require('util');

let person = function (name) {
	this.name = name;
};

util.inherits(person, events.EventEmitter);

let lwazi  = new person('lwazi');
let chunkie = new person('chunkie');
let ntando = new person('ntando');

let people = [lwazi, chunkie, ntando];

people.forEach( person => {
	person.on('speak', message => {
		console.log(person.name + ' said ' + message);
	})
});

lwazi.emit('speak', 'Hello');
chunkie.emit('speak', 'Hello, how are you');