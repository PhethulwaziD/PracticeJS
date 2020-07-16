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

function createPost (post){
	return new Promise ((resolve, reject) => {	
		setTimeout( () => {
			posts.push(post);

			const error = false;
		
			if (!error) {
				resolve();
			} else { 
				reject('Error occured');
			}

		}, 2000);
	});
}
/*
createPost({title: 'Post Three', body: 'Body of post three'})
	.then(getPost)
	.catch(err => console.log(err));
*/
/**Async Await**/
async function init() {
	await createPost({title: 'Post Three', body: 'Body of post three'});
	getPost();
}

init();