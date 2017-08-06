angular.module('app')
  .component('words', {
    bindings: {
      data: '<'
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
