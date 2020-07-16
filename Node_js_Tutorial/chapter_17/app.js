/**Routing Parameters**/
const express = require('express');
let app = express();

app.get('/', (request, response) => {
	response.send('This is the homepage');
});

app.get('/contact', (request, response) => {
	response.send('This is the Contact page');
});

app.get('/profile/:id', (request, response) => {
	response.send('This is the profile page '+ request.params.id);
});

app.listen(2002);
console.log('listening...');