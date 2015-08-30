// app.js (directive)
// =============================================================================

/*global angular*/

console.log('=== public/js/app.js ===');

(function() {

  'use strict';

  // bootstrap angular
  angular.module('app',
    [
      'ambry.inputText',
      'ambry.inputNumber',
      'ambry.inputCheckbox',
      'ambry.inputRadio',
      'ambry.inputDate'
    ])
    .controller('ContactCtrl', ['$scope', ContactCtrl]);

    function ContactCtrl($scope) {

      // creat default contact object
      $scope.contact = initData();

      $scope.move = function(){
        $scope.contact.st   = 'NY';
        $scope.contact.city = 'New York'
        $scope.contact.zip  = '10018'
        bootbox.alert('You are now a New York resident!');
      };

      $scope.log = function() {

      };

      $scope.reset = function() {

        bootbox.confirm({
          title: 'Reset Contact Data',
          message: 'Are you sure you wish to reset data?  This process can\'t be undone.',
          buttons: {
            'cancel': {
              label: 'No'
            },
            'confirm': {
              label: 'Yes'
            }
          },
          callback: function(result) {
            if (result) {
              $scope.contact = initData();
              $scope.$apply();
            }
          }
        });

      };

      function initData() {
        return {
          fname:     'Mike',
          lname:     'Erickson',
          address:   '15611 mayflower lane',
          city:      'Huntington Beach',
          st:        'CA',
          age:       42,
          kids:      4,
          grandkids: 1,
          gender:    'female',
          dob:       new Date(),
          opts:     {
            windows: true,
            osx:     false,
            linux:   true,
            other:   false
          }
        };
      }
    }

}());
