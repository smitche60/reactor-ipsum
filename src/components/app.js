angular.module('app', [])

  .controller('AppController', function(wordsService, addWordsService, $window){

    this.ws = wordsService;

    this.aws = addWordsService;

    this.data = '';

    this.handleResults = function(result) {
      this.newdata = result;
    }

    this.handleClick = function(number) {
      var result = [];
      var len = this.newdata.length;

      for (var i=0; i<number; i++) {
        result.push(this.newdata[Math.floor(Math.random()*len)]);
      }
      this.data = result.join(' ');
    }

    this.handleThumbsClick = function(number) {
      var options = ['p', 'b', 'bp', 'pp', 'pq', 'bd', 'bb', 'bbb'];
      var result = [];

      for (var i=0; i<number; i++) {
        result.push(options[Math.floor(Math.random()*8)]);
      }
      this.data = result.join(' ');
    }

    this.handleNewWord = function(word) {
      //console.log("handleNewWord")
      //console.log(this);
      addWordsService.addWord(word, function(){return true;});
      //wordsService.getWords(null, this.handleResults);
      $window.location.reload();
    }

    this.ws.getWords(null, this.handleResults.bind(this));


  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
  })


