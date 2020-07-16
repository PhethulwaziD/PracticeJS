//if statements

let age = 23;

if (age === 23){
	console.log('You are old');
}
let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];

let name = '-';
if (family.includes(name)){
	console.log(`${name} is part of your family`);
} else if (!family.includes(name)){
	console.log(`${name} is not part of your family`);
}

const passwod = "Passwaaaaaaaaaaa";

if (passwod.length >= 12 && passwod.includes('@')){
	console.log("Very good passwod");
} else if (passwod.length >= 8 || passwod.includes('@')){
	console.log("Good passwod");
} else {
	console.log("passwod is too short");
}