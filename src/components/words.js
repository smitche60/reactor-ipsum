angular.module('app')
  .component('words', {
    bindings: {
      data: '<',
      newdata: '<',
      handleclick: '<',
      handlethumbsclick: '<'
    },

    templateUrl: 'templates/words.html'
  });

// angular.module('app')
//   .component('words', {
//     bindings: {
//       data: '<'
//     },

//     templateURL: 'templates/words.html'
//   });

