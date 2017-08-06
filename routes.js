var server = require('./server.js')
var Word = require('./server/models.js')
var startingData = require('./server/data.js')

module.exports = function(app) {

  // app.get('/', function(req, res) {
  //   //res.sendFile(__dirname + '/src/index.html')
  // });


  app.get('/data', function(req, res) {

    Word.find({}).exec(function(err, results) {
       if (err) {
        console.log(err);
       } else {

        var arr = []

        results.forEach(function(item){
          arr.push(item.wordValue)
        })

        arr.sort(function(a,b){
          return Math.random() - Math.random();
        })

        res.end(JSON.stringify(arr))

       }
    })

  });


};


// Word.deleteMany({}, function(){
//   Word.insertMany(startingData, function() {
//     Word.find({}).exec(function(err, results) {
//       if (err) {
//         console.log(err);
//       } else {
//         results.forEach(function(item){console.log(item.wordValue)})
//       }
//     });
//   });
// });