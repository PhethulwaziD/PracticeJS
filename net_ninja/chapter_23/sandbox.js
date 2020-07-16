const para = document.querySelector('p');
console.log(para.innerText);
 para.innerText = 'Hello Lwazi';

 const paras = document.querySelectorAll('p');

 paras.forEach(para => {
 	console.log(para.innerText);
 	para.innerText += ' added';
 });

 const content = document.querySelector('.content');

 console.log(content.innerHTML);
//content.innerHTML += '<h2>This has been <added>	</added></h2>';

let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];

family.forEach( member => {
	content.innerHTML += `<p>${member}</p>`;
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'Net Ninja Website';

const message = document.querySelector('p.class');