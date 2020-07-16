const posts = [
	{title: 'Post One', body: 'Body of post one'},
	{title: 'Pos Two', body: 'Body of post two`'},
];

function getPost  () {
	setTimeout( () => {
		let output = '';
		posts.forEach( (post) => {
			console.log(post.title)
			output += `<li>${post.title}</li>`
		});
		document.body.innerHTML += output;
	}, 1000);
}

function createPost (post, callback){
	setTimeout( () => {
		posts.push(post);
		callback();
	}, 2000);
}


createPost({title: 'Post Three', body: 'Body of post three'}, getPost);
