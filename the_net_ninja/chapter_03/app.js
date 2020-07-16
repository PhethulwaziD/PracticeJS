/**Query Selector**/
const wrapper = document.querySelector('#wrapper');
console.log(wrapper);
 
let listItem = document.querySelector('#book_list li:nth-child(3) .name')
console.log(listItem.textContent);
listItem = document.querySelector('#book_list li:nth-child(5) .name');
console.log(listItem);

const list = document.querySelectorAll('#book_list li .name');
// list is nodelist
console.log(list);

list.forEach( element => {
	console.log(element);
});