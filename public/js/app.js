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
        $scope.contact.st = 'NY';
        console.log('$scope', $scope);
      };

      $scope.contact = {};
    }

}());
