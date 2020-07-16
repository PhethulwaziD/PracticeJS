//NULL AND UNDEFINED
//UNDEFINED -> Automaticly set if not defined
let age;
console.log(age, age + 3, `The age is ${age}`);
//NULL-> Explicitly set to be undefined.
let Age = null;
console.log(Age, Age + 3, `The age is ${Age}`);
//BOOLEANS && COMPARISONS
console.log(true, false);
console.log(true, false, "true", "false");
//Methods can return booleans;
let email = "pdonga@student.wethinkcode.co.za";
//Method includes-> checks whether a string contains the param returns boolean(true or false)
let bool = email.includes('<');
console.log(bool);
let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];
bool = family.includes('Andile');
console.log(bool);
