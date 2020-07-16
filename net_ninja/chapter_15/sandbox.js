const ul = document.querySelector('.family');

let family = ['Silindile', 'Andile', 'Ntando', 'Hlengiwe', 'Chunkie', 'Zodwa', 'Lwazi'];

let html = ``;

family.forEach(member => { html += `<li style="color: pruple">${member}</li>`; });

console.log(html);
ul.innerHTML = html;