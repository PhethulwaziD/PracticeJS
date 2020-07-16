
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let users = require('../../Users');

let urlEncodedParser = bodyParser.urlencoded({extended: false});

//Get single member
users = users.users;

router.get('/', (req, res) => res.json(users));

router.get('/:name', (req, res) => {
	const exist = users.some( user => user.firstName === req.params.name);
	if (exist){
		user = users.filter( user => user.firstName === (req.params.name));
		user[0].firstName = "Phethulwazi";
		res.json(user[0].firstName);
	} else {
		res.status(400).json('User does not exist');
	}
} );

/**Create member*/
router.get('/new_user', urlEncodedParser, (req, res) => {
function NewUser (firstName, lastName, email, sex, contact, date) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.sex = sex;
	this.contact = contact;
	this.date = date;
}
let newUserOne = new NewUser('Phethulwazi', 'Donga', 'pdonga@gmail.com', 'M', '081 209 2343', Date());
users.push(newUserOne);
res.json(users);
});
module.exports = router;