
const express = require('express');
const router = express.Router();
let users = require('../Users');

//Get single member
users = users.users;

router.get('/', (req, res) => res.json(users));

app.router ('/:name', (req, res) => {
	const exist = users.some( user => user.firstName === req.params.name);
	if (exist){
		let user = users.filter( user => user.firstName === (req.params.name));
		res.json(user);
	} else {
		res.status(400).json('User does not exist');
	}
} );

module.exports = router;