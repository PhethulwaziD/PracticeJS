const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, { useUnifiedTopology: true });


async function  createNewUser (newUser) {
	try {
		await client.connect();
		const db = client.db("matchaUsers");
		console.log(`Connected to ${db.databaseName}`);
		const Users = db.collection("Users");
		await Users.insertOne(newUser);
		console.log("All good");
	} catch(e) {
		//Error
		console.log(e);
	} finally {
		// close connection
		client.close();
	}
};

module.exports = createNewUser;