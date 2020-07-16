/**A to do list**/
let express = require('express');

let app = express();

let controller = require('./controller/controller');

//viewing template
app.set('view engine', 'ejs');
//static files
app.use('/styles',express.static('styles'));

controller(app);

app.listen(3000);

console.log('Listening...');