const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'Net Ninja Website';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
//usefull in changing the classes
console.log(message.getAttribute('class'));
//create a new attribute-> if the attribute does not exist js will create it
message.setAttribute('style','color:blue');
