//Type Conversion
let age = '23';
console.log(typeof(age));
age = Number(age);
console.log(age + 1);
console.log(typeof(age));

let name = "Lwazi";
let Name = name;
name = Number(name);//cannot convert non numerical chars to Number
console.log(name);

//convert a number to string
age = String(age);
console.log(age, typeof(age));

//convert to boolean
age = Boolean(Number(age) - Number(age));
console.log(age);

Name = Boolean(Name);
console.log(Name);