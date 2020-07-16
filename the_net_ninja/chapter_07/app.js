/*Traversing the DOM Sibling*/
//Sibling -> elemnts on the same level
const bookList = document.querySelector('#book_list');
//Next Sibling
console.log(bookList.nextSibling.nextSibling);
//return The next node
//Next Element Sibling
console.log(bookList.nextElementSibling);
//returns and elemment sibling

//Previous Sibling
console.log(bookList.previousSibling);
//Previous Element Sibling
console.log(bookList.previousElementSibling);

//bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Only the best';
const para = bookList.previousElementSibling.querySelector('#banner');
console.log(para);