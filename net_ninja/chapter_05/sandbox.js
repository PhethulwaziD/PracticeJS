//ARRAYS
//STRING ARRAY
let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];
console.log(family);
console.log(family[2]);
//Override
family[5] = "Phethulwazi";
console.log(family[5]);
//NUMBERS ARRAY
let ages = [40, 22, 18, 11, 25, 50, 23];
console.log(ages[1]);
//Properties
//length
let len = family.length;
console.log(len);
//Methods
//Join Method -> Joins all string in an array with the param set;
let fam = family.join(', ');
console.log(fam);
//indexOf Method -> returns the index of the passed in param
let member = family.indexOf('Andile');
console.log(member);
//Method concat -> concatenate the params to the array
let familia = family.concat(['Nonkululeko']);
console.log(familia);
//Method push-> adds the param into the array and then returns the legth of the new array
//Note: This method alters the value and thus is a destructive method(changes value)
let famLen = family.push('Nonkululeko');
console.log(famLen);
console.log(family);
//Method pop-> takes of the set param in the array and if param is not set takes of the lat element and returns that
//Note: This method alters the value and thus is a destructive method(changes value)
console.log(family.pop());
console.log(family);
console.log(family.pop('Zodwa'));
console.log(family);
bool = family.includes('Andile');
console.log(bool);