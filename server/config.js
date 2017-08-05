var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1', {useMongoClient: true});

var db = mongoose.connection;

module.exports = db;