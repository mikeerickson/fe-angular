// AMBRY-INPUT-TEXT
// =============================================================================

console.log('=== public/js/directives/ambryInputText.js ===');

(function() {

  "use strict";

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
      require:          'ngModel',
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
        ngTrim:      '=',
        model:       '=ngModel'
      },
      compile:          _compile,
      //link:             _link,
      controller:       _ambryInputTextContoller,
      controllerAs:     'vm',
      bindToController: true,
      templateUrl:      _templateUrl,
    };

    return directive;

    function _link(scope, element, attrs, ngModelCtrl) {
      console.log('_link method');
    }

    function _compile(){

      return {
        post: function(scope, element, attributes, ngModelCtrl){
          ngModelCtrl.$setViewValue(attributes.value);

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

  // component controller
  function _ambryInputTextContoller($scope, $element, $attrs) {

  }

}());

