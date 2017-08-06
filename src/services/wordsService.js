

angular.module('app').service('wordsService', function($http){

  this.getWords = function(param, callback) {
    $http.get('http://127.0.0.1:8080/data')
      .then(
      //Success
      function(response){
        //console.log(JSON.stringify(response.data[0]))
        callback(response.data[0])
      },
      //Fail
      function(err){console.log(err)})
  };


})