var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var db = require('./server/config.js')
var Word = require('./server/models.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serves get requests to '/' (serves up index.html in that dir)
app.use(express.static(__dirname + '/src'));

require('./routes')(app);

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;


/***************************************************/
/******************Database*************************/
/***************************************************/

//add this in its own config file
//mongoose.connect('mongodb://127.0.0.1', {useMongoClient: true});

// add this in its own model
// module.exports = Word
// var Word = mongoose.model('Word', {
//   wordValue: {type: String}
// });

//put this wherever you want
insertWord = function(word) {

  newWord = new Word({wordValue: word});

  var promise = newWord.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('document added: ' + word)
    }
  });
}

insertWord('meow')

Word.find({}).exec(function(err, word) {
  if (err) {
    console.log(err);
  } else {
    console.log(word);
  }
})
