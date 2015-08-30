// AMBRY-INPUT-TEXT
// =============================================================================

console.log('=== public/js/directives/ambryInputNumber.js ===');

(function() {

  'use strict';

  angular.module('ambry.inputNumber', [])
    .directive("ambryInputNumber", _inputNumber);


// DIRECTIVE METHODS
// =============================================================================

  function _inputNumber() {

    var _templateUrl = 'templates/ambry-input-number.tpl';
    var _uniqueId    = 0;

    var directive = {
      restrict:      'E',
      replace:       true,
      require:       'ngModel',
      scope:         {
        type:        '@',
        icon:        '@',
        name:        '@',
        class:       '@',
        value:       '@',
        label:       '@',
        ngRequired:  '=',
        ngMinlength: '=',
        ngMaxlength: '=',
        ngPattern:   '=',
        ngChange:    '=',
        ngTrim:      '=',
        model:       '=ngModel',
      },
      compile:          _compile,
      link:             _link,
      controller:       _ambryInputNumberContoller,
      controllerAs:     'vm',
      bindToController: true,
      templateUrl:      _templateUrl
    };

    return directive;

    function _link(scope, element, attrs) {
      console.log('=== _link ===');
      console.log('scope:   ', scope);
      console.log('element: ', element);
      console.log('attrs:   ', attrs);
    }

    function _compile(){

      return {
        post: function(scope, element, attributes, ngModelCtrl){
          ngModelCtrl.$setViewValue(attributes.value);

          scope.input = element.find('input');
          scope.label = element.find('label');

          //Default options
          attributes.type  = attributes.type  || 'number';

          var item       = 'input_' + _uniqueId++
            , inputClass = 'input--filled';

          scope.input.attr('id' , item);
          scope.label.attr('for', item);

          onInputChange();
          scope.input.bind('focus', onInputFocus);
          scope.input.bind('blur',  onInputBlur);

          //To detect browser autofill
          scope.input.bind('change', onInputChange);

          scope.$watch(function(){ return scope.input.val(); }, function(newValue){
            onInputChange();
          });

          function onInputChange(){
            if(scope.input.val().trim() !== '')
              addClass();
          }

          function onInputFocus(){
            addClass();
          }

          function onInputBlur(){
            if(scope.input.val().trim() === '')
              removeClass();
          }

          function addClass(){
            element.addClass(inputClass);
          }

          function removeClass(){
            element.removeClass(inputClass);
          }

        }
      };
    }

  }

  function _ambryInputNumberContoller($scope) {
    var vm = this;
  }

}());

