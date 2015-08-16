angular.module('app').directive('ambry-text', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    template: '',
    link: function($scope, $element, $attrs) {
      console.log('hello world from directive');
      $element.text('hello world from directive');
    }
  };
});
