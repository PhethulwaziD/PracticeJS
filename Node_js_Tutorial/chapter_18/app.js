/**Templating Engines**/
const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname +'/contact.html'); 
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
app.listen(3003);
console.log('Listening...');
