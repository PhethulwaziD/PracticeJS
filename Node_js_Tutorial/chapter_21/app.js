/**Query Strings**/
const express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use('/styles', express.static('styles'));

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/contact', (req, res) => {
	res.render('contact.ejs', {request : req.query});
	console.log(req.query); 
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
app.listen(3000);
console.log('Listening...');
