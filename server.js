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

// insertWord('meow')



var arr = [
{wordValue: 'Lannister'},
{wordValue: 'Tyrell'},
{wordValue: 'Martell'},
{wordValue: 'Barathean'},
{wordValue: 'Stark'},
{wordValue: 'Targaryen'}
]


// Word.insertMany(arr, function(){
//   console.log('bulk upload complete')
// })

Word.find({}).exec(function(err, word) {
  if (err) {
    console.log(err);
  } else {
    console.log(word);
  }
})