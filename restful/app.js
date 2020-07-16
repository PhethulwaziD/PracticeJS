const MongoClient  = require('mongodb').MongoClient;
const express = require('express');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });
const app = express();
//Connect to database
connect();
async function connect(){
	await client.connect();
	const db = client.db("matchaUsers");
	console.log('Connected to '+ db.databaseName);
}
//Middleware
/*
app.use('/post', () => {
	console.log("Middleware");
});
*/
const postRoute = require('./routes/posts');

//ROUTES
app.use('/post', postRoute);
app.get('/', (req, res) => {
	res.send("Home");
});

//Listen to server
app.listen(5000, () => console.log("Listening...")); 