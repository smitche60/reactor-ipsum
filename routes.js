
module.exports = function(app) {
console.log('Inside routes function')

  app.get('/', function(req, res) {
    //res.sendFile(__dirname + '/src/index.html')
    console.log('Inside get request')
  });

};