angular.module('app', [])

  .controller('AppController', function(wordsService){

    this.ws = wordsService;

    this.data = 'SCOTT';

    this.newData = '';

    this.handleResults = function(result) {
      console.log(result);
      this.data = result;
      console.log(this.data);
    }

    setTimeout(function(){console.log(this.data)},2000);

    // this.handleClick = function() {
    //   console.log("handleClick")
    //   this.data.push(this.newData[this.newData.length-1]);
    // }

    this.ws.getWords(null, this.handleResults);

    //console.log(this.newData, '25');

  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
  })


