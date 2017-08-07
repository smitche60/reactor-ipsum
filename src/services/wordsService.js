

angular.module('app').service('wordsService', function($http){

  this.getWords = function(param, callback) {
    $http.get('http://127.0.0.1:8080/data')
      .then(
      //Success
      function(response){
        //console.log(JSON.stringify(response.data[0]))
        callback(response.data)
      },
      //Fail
      function(err){console.log(err)})
  };

})



angular.module('app').service('addWordsService', function($http){

  this.addWord = function(param, callback) {
    $http.post('http://127.0.0.1:8080/data', {"wordValue": param})
      .then(
      //Success
      function(response){
        //console.log(JSON.stringify(response.data[0]))
        callback(response.data)
      },
      //Fail
      function(err){console.log(err)})
  };

})