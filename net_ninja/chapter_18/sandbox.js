/**Objects->Object in arrays**/
let user = {
	name: 'Phethulwazi',
	age: 23,
	email: 'pdonga@student.wethinkcode.co.za',
	location: 'Jozi',
	blogs: [
		{title: 'Food Lovers', likes:30},
		{title: 'Best Movies', likes: 50}
	],
	login(){
		console.log('Logged In');
	},
	logout(){
		console.log('Logged Out');
	},
	logBlogs(){
		//console.log(this.blogs);
		this.blogs.forEach(blog => { 
			console.log(blog.title, blog.likes);
		});
		//do not use this function with arrow function
	}
};


const blogs = [
	{title: 'Food Lovers', likes:30},
	{title: 'Best Movies', likes: 50}
];
user.login();
user.logout();
user.logBlogs();
//console.log(blogs);
