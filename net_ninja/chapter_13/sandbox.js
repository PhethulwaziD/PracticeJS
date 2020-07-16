//Argument and Parameters
const speak = function(name/*This is a parameter*/){
//name is  local var
console.log(`Good day ${name}`);
}
speak('Lwazi');
//When value is passed in a function it is called an argument

//Multiple parameters
const speaker = function(name = 'Chunkie', time = 'night'){
console.log(`Good ${time} ${name}`);
}
speaker('Lwazi','morning');
speaker();

/**********Return Values**********/
const Area = function(radius){
	return (3.14 * radius ** 2);
};

const area = Area(5);
console.log(area);