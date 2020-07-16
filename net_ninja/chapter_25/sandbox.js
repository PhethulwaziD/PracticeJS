const title = document.querySelector('h1');
//When adding more styles to a node the style set in the html are overwritten
//title.setAttribute('style','margin: 50px;');

console.log(title.style);
console.log(title.style.color);

//How then do we add style
title.style.margin = '50px';
title.style.color = 'blue';
title.style.fontSize = '60px';
//title.styles