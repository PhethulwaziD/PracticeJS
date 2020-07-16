/******Objects*****/
/*
	Objects
	Properties->
	functions(methods)-> 
*/
//Objects literals
 let user = {
 	name: 'Phethulwazi',
 	age: 23,
 	email: 'pdonga@student.wethinkcode.co.za',
 	location: 'Johannesburg',
 	blogs: ['wethinkcode', 'food']
 };

 console.log(user);
 console.log(user.name);
 console.log(user['name'])
user.name = 'Chunkie';
 console.log(user);
 console.log(user.name);
 user['name'] = 'Lwazi';
 console.log(user['name'])
// case where it is better to use square bracket notation
let fname = 'name';

console.log(user.fname);//X wrong
console.log(user[fname]);//right
console.log(typeof(user));