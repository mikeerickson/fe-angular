// app.js (directive)
// =============================================================================

console.log('=== public/js/app.js ===');

"use strict";

(function() {

  // bootstrap angular
  angular.module('app',
    [
      'ambry.inputText',
      'ambry.inputNumber'
    ])
    .controller('ContactCtrl', ['$scope', ContactCtrl]);

    function ContactCtrl($scope) {
      var vm = this;
      $scope.test = function(){
        vm.st = 'LL';
        $scope.st = 'MM';
        console.log('$scope', $scope);
      };
    }

}());
