/**Node Package Manager**/
//Commmand npm install express -g -save
//npm install -g nodemon -save (nodemon app.js to run files)

/**Express -> GET Request**/

let express = require('express');
let app = express();
app.get('/', (request, response) => {
	response.send('This is the response');
});

app.get('/contact', (request, response) => {
	response.send('This is the contact page');
});
app.listen(1996);
console.log('listening')
