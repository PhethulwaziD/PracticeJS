/**Search Filters**/
const searchForm = document.forms['search-books'].querySelector('input[name="search"]');

searchForm.addEventListener('keyup', event=> {
	const bookName = event.target.value.toLowerCase();
	const bookList = document.querySelectorAll('#book_list li .name');
	bookList.forEach(book=> {
		const title = book.textContent.toLowerCase();
		if (title.includes(bookName)) {
			book.parentElement.style.display = 'block';
		} else {
			book.parentElement.style.display = 'none';
		}	
	});
});  