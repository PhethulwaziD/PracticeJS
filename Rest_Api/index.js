const express = require('express');
const app = express();

//CONNECT TO DB
const connect = require('./utilities/connection/connection'); 
connect();

//Middleware
app.use('/api/user', require('./routes/auth'));    

app.listen(5000, () => console.log('Listening...'));