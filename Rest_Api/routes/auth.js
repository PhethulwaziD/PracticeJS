const router = require('express').Router();
const newUserObject = require('../utilities/model/newUserObject');
const createNewUser = require('../utilities/userUtilities/createNewUser');
const deleteUser = require('../utilities/userUtilities/deleteUser');
const connect = require('../utilities/connection/connection');

router.get('/register', (req, res) => {
	let newUserOne = new newUserObject(
	 "Phethulwazi",
	 "Donga",
	 "pdonga@gmail.com",
	 'M',
	 "081 208 1314",
	  24,
	  Date()
	  );
	createNewUser(newUserOne);
	res.send("Users registerd");
	//connect();
	//deleteUser("Phethulwazi");

});

module.exports = router;