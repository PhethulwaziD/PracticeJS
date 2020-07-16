/*******Callbacks & foreach********/
const myFunc = (callback) => {
	let value = 40;
	callback(value);
};

myFunc((value) => {
	console.log(value);
});

/***ForEach****/
let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];

family.forEach((member, index) => {
	console.log(index, 	member);
});
/****cleaner****/
 let logMember = (index, member) => {
 	console.log(`${index} ${member}`);
 }
 family.forEach(logMember)