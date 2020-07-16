/**Forms**/

const list = document.querySelector('#book_list ul');
console.log(list);
list.addEventListener('click', event => {
	if (event.target.className == 'delete') {
		console.log('detete');
		const book = event.target.parentElement;
		book.parentElement.removeChild(book);
	}
	console.log(event.target.className);
})
//Query forms
console.log(document.forms);
/**Adding a new book**/
const addBook = document.forms['add_books'];
 addBook.addEventListener('submit', event => {
 	event.preventDefault();
 	const name = addBook.querySelector('input[type="text"]').value;
 	console.log(name); 
 });
