var db = require('./config.js')
var mongoose = require('mongoose');

var Word = mongoose.model('Word', {
  wordValue: {type: String}
});

module.exports = Word;