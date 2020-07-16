const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, { useUnifiedTopology: true });

connect();
async function  connect (newUser) {
	try {
		await client.connect();
		const db = client.db("matchaUsers");
		console.log(`Connected to ${db.databaseName}`);
		/*Get Collections
		const collections = await db.collections();
		collections.forEach(user => console.log(user.collectionName));
		*/
		//FIND COLLECTION
		const Users = db.collection("Users");
		const searchCursor = await Users.find({});
		/*
		while (await searchCursor.hasNext()){
			console.log(await searchCursor.next());
		}
*/
		//OR
		await searchCursor.toArray().then( array => {
			console.log(array);
		});
		//console.log(result.length);
		//console.table(result);
/*
		//INSERT DATA
		function newUser (firstName, lastName, email, sex, contact, age, date) {
			this.firstName = firstName;
			thislastName = lastName;
			this.email = email;
			this.sex = sex;
			this.contact = contact;
			this.age = age;
			this.date = date;
		};
		let newUserOne = new newUser("Hlengiwe", "Donga", "hdonga@gmail.com", 'F', "081 208 1212", 12, Date());
		let newUserTwo = new newUser("Nonkululeko", "Mpanza", "nonksdonga@gmail.com", 'F', "081 208 1313", 12, Date());
		//const insertCursor = await Users.insertMany([newUserOne, newUserTwo]);
		//UPDATE
		/*
		const update = await Users.updateOne({"firstName": "Phethulwazi"}, { "$set": {"Birth": "9-9-1996"}});
		console.log(update.modifiedCount);
		*/

		//DELETE
		/*
		const deleteUser = await Users.deleteOne({"firstName": "Phethulwazi"})
		console.log(deleteUser.deleteCount);
		*/
	} catch(e) {
		//Error
		console.log(e);
	} finally {
		// close connection
		client.close();
	}
};

module.exports = connect;