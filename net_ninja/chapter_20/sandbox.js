/**Primitive**and**Reference**Types**/
/**Primitive**/
/*
Primitive value are stored in the stack
1.Numbers
2.Strings
3.Booleans
4.Null
5.Undefined
6.Symbols
How does this affect the code
*/
let scoreOne  = 100,
	scoreTwo = scoreOne;
console.log(scoreOne, scoreTwo);
scoreOne = 80;
console.log(scoreOne, scoreTwo);
/**Reference->**/
/*
Object value are stores in the heap
All types of Objects
1. Object Literals
2.Arrays
3.Functions
4.Dates
...
How does this affect the code

*/
let familyOne = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'],
	familyTwo = familyOne;
console.log(familyOne, familyTwo);
familyOne[familyOne.length - 1] = 'Phethulwazi'; 
console.log(familyOne, familyTwo);