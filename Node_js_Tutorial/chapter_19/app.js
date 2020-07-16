/**Query strings**/
const express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use('/styles', express.static('styles'));

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/contact', (req, res) => {
	console.log(req.query);
	res.render('contact.ejs'); 
});

app.get('/profile/:name', (req, res) => {
	let data = {
		name : req.params.name,
		age : 23,
		Job : 'Programmer',
		lan : ['C', 'Javascript', 'php'] 
	};
	res.render('profile.ejs', {data: data});
});
app.listen(1994);
console.log('Listening...');
