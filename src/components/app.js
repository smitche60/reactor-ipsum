angular.module('app', [])

  .controller('AppController', function(){

    this.sayHello = function() {
      console.log('Hello!');
    }

  })

  .component('app', {
    controller: 'AppController',
    templateUrl: 'templates/app.html'
    //template: "<div>I'm the app.html div!</div>"
  })
