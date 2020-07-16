/**DOM Events=> Event Listeners**/
const heading  = document.querySelector('#book_list h2');
heading.addEventListener('click', event => {
	console.log(event.target);
	console.log(event);
})

const buttons = document.querySelectorAll('#book_list .delete');
buttons.forEach(button => {
	button.addEventListener('click', event => {
		const list = event.target.parentElement;
		console.log(list);
		list.parentElement.removeChild(list);
	});
});

//Extra stuff
//prevent default
const link = document.querySelector('#book_list a');
link.addEventListener('click', event => {
	event.preventDefault();
})