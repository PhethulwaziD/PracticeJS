/**Checkbox events**/
const list = document.querySelector('#book_list ul')
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', event=> {
	if (hideBox.checked){
		list.style.display = 'none';
	} else {
		list.style.display = 'block';
	}
});