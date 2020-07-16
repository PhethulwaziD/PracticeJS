const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(para => {
	//inner Text works with visible text
	//textContent works with visible and invisible text
	console.log(para.innerText);
	if (para.textContent.includes('success')){
		para.classList.add('success');
		console.log('success');
	} else if (para.innerText.includes('error')){
		para.classList.add('error');
		console.log('error');
	} else {
		console.log('none');
	}
})

//toggle -> remove if exist add if does not
const title = document.querySelector('h1');

title.classList.toggle('error');
title.classList.toggle('error');