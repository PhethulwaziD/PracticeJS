const para = document.querySelector('p');

//console.log(para.getAttribute('class'));
//para.setAttribute('class', 'success');
//adding a class to a node
console.log(para.classList);
para.classList.add('error');
console.log(para.classList);
para.classList.remove('error');
para.classList.add('success');