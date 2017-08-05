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
// insertWord = function(word) {

//   newWord = new Word({wordValue: word});

//   var promise = newWord.save(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('document added: ' + word)
//     }
//   });
// }

// insertWord('meow')



var arr = [
{wordValue: 'Lannister'},
{wordValue: 'Tyrell'},
{wordValue: 'Martell'},
{wordValue: 'Barathean'},
{wordValue: 'Stark'},
{wordValue: 'Targaryen'},
{wordValue: 'Moo'},
{wordValue: 'LearnApp'},
{wordValue: 'Makerpass'},
{wordValue: 'Zoom'},
{wordValue: 'Moo'},
{wordValue: 'Meow'},
{wordValue: 'Pep Talk'},
{wordValue: 'Party Parrot'},
{wordValue: 'Help Desk'},
{wordValue: 'Townhall'},
{wordValue: 'Codybot'},
{wordValue: 'Angular'},
{wordValue: 'React'},
{wordValue: 'Backbone'},
{wordValue: 'Node'},
{wordValue: 'Squishy-Mic'},
{wordValue: 'Greenfield'},
{wordValue: 'Legacy'},
{wordValue: 'Shepherd'},
{wordValue: 'Social Hack Night'},
{wordValue: 'BeesBeesBees'},
{wordValue: 'SubClass Dance Party'},
{wordValue: 'Chatterbox'},
{wordValue: 'Precourse'},
{wordValue: 'Thesis'},
{wordValue: 'Shortly'},
{wordValue: 'Sqool'},
{wordValue: 'recast.ly'},
{wordValue: 'HRR Cribs'},
{wordValue: 'Tapouts'}
]


// Word.insertMany(arr, function(){
//   console.log('bulk upload complete')
// })

Word.deleteMany({}, function(){
  Word.insertMany(arr, function() {
    Word.find({}).exec(function(err, results) {
      if (err) {
        console.log(err);
      } else {
        results.forEach(function(item){console.log(item.wordValue)})
      }
    })
  })
})


// Word.find({}).exec(function(err, word) {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(word);
//     word.forEach(function(item){console.log(item.wordValue)})
//   }
// })







