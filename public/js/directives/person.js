// FILENAME
// =============================================================================

console.log('=== public/js/directives/person.js ===');

"use strict";

(function() {

  var app = angular.module('app', []);
  app.directive("person", function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        sal:   '@',
        fname: '@',
        lname: '@'
      },
      templateUrl: 'templates/person.tpl'
    }
  });

  app.controller( 'PersonController', function( $scope ) {
    $scope.family = [
      {sal: 'Mr', fname: 'Mike', lname: 'Erickson'},
      {sal: 'Mrs', fname: 'Kira', lname: 'Erickson'},
      {sal: 'Mrs', fname: 'Joelle', lname: 'Asoau'},
      {sal: 'Mr', fname: 'Brady', lname: 'Erickson'},
      {sal: 'Ms', fname: 'Bailey', lname: 'Erickson'},
      {sal: 'Mr', fname: 'Trevor', lname: 'Erickson'},
    ]
    console.log('=== Person Controller ===');
  });

}());



