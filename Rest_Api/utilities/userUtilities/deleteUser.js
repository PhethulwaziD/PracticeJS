const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, { useUnifiedTopology: true });


async function  deleteUser (userName) {
	try {
		client.connect();
		const db = client.db("matchaUsers");
		const Users = db.collection("Users");
		try {
			const deleteUser = await Users.deleteOne({"firstName": userName});
			console.log("User deleted");
			console.log(deleteUser.deleteCount);
			// statements
		} catch(e) {
			// statements
			console.log(e);
		}		
	} catch(e) {
		//Error
		console.log(e);
	} finally {
		// close connection
		client.close();
	}
};

module.exports = deleteUser;