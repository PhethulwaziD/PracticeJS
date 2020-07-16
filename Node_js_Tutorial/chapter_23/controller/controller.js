let data = [{item: 'get airtime'}, {item: 'drink water'}, {item: 'kiss chunkie'}];

let bodyParser = require('body-parser');

let urlEncodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {
	
	app.get('/todo', (req, res) => {
		res.render('todo', {todos: data});	
	});

	app.post('/todo', urlEncodedParser,(req, res) => {
		let toDo = {item: req.body.item};
		data.push(toDo);
		console.log(data);
		res.render('todo', {todos: data});
	});

	app.delete('/todo', (req, res) => {
		
	});
}