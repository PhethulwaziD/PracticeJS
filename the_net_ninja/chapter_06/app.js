/**Traversing the DOM**/
//Parent And Child Nodes

const bookList = document.querySelector('#book_list');
//Parent Node && Parent element
console.log(bookList.parentNode);
console.log(bookList.parentElement);
console.log(bookList.parentElement.parentElement);
//Parent node and element return the same thing 99%
//Child Node
console.log(bookList.childNodes);
//childNodsies returns a node list with text breaks
console.log(bookList.children);
//children return a node list
