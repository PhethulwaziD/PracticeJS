const express = require('express');
const fs = require('fs');
const moment = require('moment');
const logger = require('./Middleware/logger');

app = express();//initialise

//app.set('view engine', 'ejs');
//Middleware
//app.use(logger);
app.use('/api/users', require('./routes/api/users'));
/*
app.get('/', (req, res) => {

	res.send('<h1>Hello world</h1>');
	//res.sendFile(__dirname +'/mongo-cheat-sheet.txt');
});
*/
//app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 2000;
//process.env.PORT -> Look at enviroment variables

app.listen(PORT, () => console.log('Listening...'));