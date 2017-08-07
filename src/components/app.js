angular.module('app', [])

  .controller('AppController', function(wordsService){

    this.ws = wordsService;

    this.data = 'SCOTT';

    this.newData = 'Initialized value';

    console.log(this.newData);

    this.handleResults = function(result) {
      this.newData = result;
      console.log("handleResults this", this)
      console.log(this.newData);
    }

    setTimeout(function(){console.log(this)},2000);
    setTimeout(function(){console.log(this.newData)},10000);

    this.handleClick = function() {
      console.log("before handleclick this", this);
      this.data = this.newdata
      console.log("after handleclick this", this);
      console.log("handleClick", this.data, this.newData);
    }

    this.ws.getWords(null, this.handleResults.bind(this));


  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
  })


