//LOOPS
//For loop
for (let i = 0; i < 4; i++){
	console.log(i);
}

console.log("For Loop");
let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];
let name = family[3];
console.log(name);
for (let j = 0; j < family.length; j++){
	//console.log(family[j]);
	if (family[j] === name){
		continue;
	}
	let html = `<div>Name: ${family[j]}</div>`;
	console.log(html);
	if (j === 5){
		break;
	}
}

//While Loop
console.log("While Loop");
let j = 0;

while (j < family.length){
	let html = `<div>Name: ${family[j]}</div>`;
	console.log(html);	
	j++;
}