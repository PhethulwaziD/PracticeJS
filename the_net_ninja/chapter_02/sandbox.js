/**Get Element By Class Name**/
const title = document.getElementsByClassName('title');
//title is an html collection list
console.log(title);
//Indexing the html collection
console.log(title[0]);
console.log(title[1]);

/**Get Element By Tag Name**/
const list = document.getElementsByTagName('li');
//list is an html collection list
console.log(list);
//Indexing the html colllection
console.log(list[0]);
console.log(list[2]);

for (i = 0; i < list.length; i++){
	console.log(list[i]);
}

//forEach
Array.from(list).forEach( element => {
	console.log(element);
});