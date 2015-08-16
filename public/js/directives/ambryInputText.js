// AMBRY-INPUT-TEXT
// =============================================================================

console.log('=== public/js/directives/ambryInputText.js ===');

"use strict";

(function() {

  angular.module('ambry.inputText', [])
    .directive("ambryInputText", _inputText);

// DIRECTIVE METHODS
// =============================================================================

  function _inputText() {

    var _templateUrl = 'templates/ambry-input-text.tpl';
    var _uniqueId    = 0;

    var directive = {
      restrict:         'E',
      replace:          true,
      scope:            {
        type:        '@',
        icon:        '@',
        name:        '@',
        class:       '@',
        value:       '@',
        label:       '@',
        ngModel:     '@',
        ngRequired:  '=',
        ngMinlength: '=',
        ngMaxlength: '=',
        ngPattern:   '=',
        ngChange:    '=',
        ngTrim:      '='
      },
      compile:          _compile,
      link:             _link,
      controller:       _ambryInputTextContoller,
      controllerAs:     'vm',
      bindToController: true,
      templateUrl:      _templateUrl,
      test : function() {
        alert('directive method');
      }
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
        post: function(scope, element, attributes){

          scope.input = element.find('input');
          scope.label = element.find('label');

          //Default options
          attributes.type  = attributes.type  || 'text';

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

  function _ambryInputTextContoller($scope, $element, $attrs) {

    var vm = this;
    vm.test = function(){
      vm.value = 'ZA';
    };

    console.log('"name": "%s", "value": "%s"', vm.name, vm.value);
  }

}());

