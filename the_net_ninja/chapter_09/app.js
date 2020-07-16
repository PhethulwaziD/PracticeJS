/**Bubbling**/
/*const buttons = document.querySelectorAll('#book_list .delete');

buttons.forEach(button => {
	button.addEventListener('click', event => {
		const book = event.target.parentElement;
		console.log(book);
		book.parentElement.removeChild(book);
	})
});*/

const list = document.querySelector('#book_list ul');
console.log(list);
list.addEventListener('click', event => {
	if (event.target.className == 'delete'){
		console.log('delete');
		const book = event.target.parentElement;
		book.parentElement.removeChild(book);
		console.log(book);
	}
	//console.log(event.target.className0);
});

