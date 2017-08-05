angular.module('app', [])

  .controller('AppController', function(){

    this.data = "I'm some data";

    this.otherData = "I'm some different data"

    this.renderData = function(data) {
      this.data = data;
    }


  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
  })


