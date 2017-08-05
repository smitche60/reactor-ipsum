var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 8080;
// db = require('./wherever/iputdbstuff')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '/src'));

require('./routes')(app);

app.listen(port);

console.log('Listening on port ' + port);

module.exports = app;

