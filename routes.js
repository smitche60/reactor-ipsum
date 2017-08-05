
module.exports = function(app) {

  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html')
    //console.log('Inside routes.js')
  });

};