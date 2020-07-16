
function newUserObject (userName,firstName, lastName, email, password) {
	this.userName = userName
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.contact = contact;
	this.gender = '';
	this.birthDate = '';
	this.age = '';
	this.profilePicture: '';
	this.pics = [];
	this.verified = 'N';
	this.verificationKey = '';
	this.biography = "";
	this.interest = [];
	this.location = {latest: "", original: ""};
	this.online = "N";
	this.popularity = 0;
	this.likedBy = [];
	this.blocked = []
	this.date = Date.now();
};

module.exports = newUserObject;