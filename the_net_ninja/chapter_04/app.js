/**Editing the Dom**/
/*Editing text*/
const bookList = document.querySelectorAll('#book_list li .name');
console.log(bookList);
bookList.forEach( book => {
	book.textContent += '(book)';
	console.log(book.textContent);
});

/*Editing HTML*/
const list = document.querySelector('#book_list')
console.log(list.innerHTML);
//list.innerHTML = '<h2>More Books...</h2>';
list.innerHTML += '<li>Okonkwo</li';
console.log(list.innerHTML);