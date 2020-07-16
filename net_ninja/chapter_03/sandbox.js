//Common String Methods
let email = "pdonga@student.wethinkcode.co.za";
//Last Index of->finds the last index of the passed in character
let lastIndex = email.lastIndexOf('a');
console.log(lastIndex);
//Slice-> aka->strsub: slices the string from the passed in starting value point and ending point
let sliced = email.slice(1,6);
console.log(sliced);
//substr-> create a sub string of the string from the passed in starting point to the length
let sub = email.substr(1, 6);
console.log(sub);
// replace-> replaces the first occurence of the 1st param with the 2nd
let rep = email.replace('pdonga', 'lwazi');
console.log(rep);
