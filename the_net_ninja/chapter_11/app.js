/**Creating Elements**/

const bookList = document.querySelector('#book_list ul');

bookList.addEventListener('click', event => {
	if (event.target.className == 'delete'){
		const book = event.target.parentElement;
		book.parentElement.removeChild(book);
	}
});
const list = document.querySelectorAll('#book_list li .name');
console.log(list[list.length - 1]);
const addBook = document.forms['add_books'];
console.log(addBook);
addBook.addEventListener('submit', event => {
	event.preventDefault();
	const bookName = addBook.querySelector('input[name="bookName"]').value;
	console.log(bookName);
	//My way
	/*list[list.length - 1].innerHTML +=`<li>
						<span class="name">${bookName}</span>
          				<span class="delete">delete</span>
					</li>`;
 	*/
 	const br = document.createElement('br');
 	const li = document.createElement('li');
 	const name  = document.createElement('span');
 	const deleteBtn = document.createElement('span');
 	deleteBtn.textContent = 'delete';
 	deleteBtn.className = 'delete';
 	//deleteBtn.classList.add('delete');
 	name.textContent = bookName;
 	//append
 	li.appendChild(name);
 	li.appendChild(deleteBtn);
 	//br.append(li);
 	bookList.appendChild(li);
 
 
});