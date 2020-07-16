/**Object Literals**and**this**/

let user = {
	name: 'Phethulwazi',
	age: 23,
	email: 'pdonga@student.wethinkcode.co.za',
	location: 'Jozi',
	blogs: ['food', 'family'],
	login(){
		console.log('Logged In');
	},
	logout(){
		console.log('Logged Out');
	},
	logBlogs(){
		//console.log(this.blogs);
		this.blogs.forEach(blog => { 
			console.log(blog);
		});
		//do not use this function with arrow function
	}
};

user.login();
user.logout();
user.logBlogs();