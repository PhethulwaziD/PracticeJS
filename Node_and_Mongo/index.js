const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
console.log(MongoClient);
connect =  async () => {
	const client = new MongoClient(url);//object
	console.log(client);
	///try {
		//await client.connect();
		//console.log(client);
		/*const db = client.db("matchaUsers");
		console.log('Connected...');
		const collections = await db.collections();
		collections.forEach( data => console.log(data.collectionName));
		
		const Users = db.collection('Users');
		let searchCursor = await Users.find({firstName: 'Phethulwazi'});
		while (await searchCursor.hasNext()){
			let user = await searchCursor.next();
			console.log(user.firstName);
		}
		//console.log(u`ser);
	}
	catch (error) {
		console.error('Error: ' + error);
	}
	finally {
		client.close();
	}*/
}
connect();