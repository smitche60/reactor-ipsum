angular.module('app')

  .controller('AppController', function(){

    this.sayHello = function() {
      console.log('Hello!')
    }

  })

  .component('app', {
    contoller: 'AppController'
    templateUrl: 'src/templates/app.html'
  })