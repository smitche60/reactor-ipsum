angular.module('app', [])

  .controller('AppController', function(wordsService){

    this.ws = wordsService;

    this.data = '';

    this.handleResults = function(result) {
      this.newdata = result;
    }

    this.handleClick = function(number) {
      var result = [];
      var len = this.newdata.length
      for (var i=0; i<number; i++) {
        result.push(this.newdata[Math.floor(Math.random()*len)])
      }
      this.data = result.join(' ');
    }

    this.handleThumbsClick = function(number) {
      var options = ['p', 'b']




    }


    this.ws.getWords(null, this.handleResults.bind(this));

  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
  })


