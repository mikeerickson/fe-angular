// AMBRY-INPUT-TEXT
// =============================================================================

console.log('=== public/js/directives/ambryInputText.js ===');

"use strict";

(function() {

  var app = angular.module('app', []);

  // create directive instancence
  app.directive("ambryInputText",   ambryInputText);

  // there will be a unique controller instance for each object
  // if not supplied, parent scope method will be used
  app.controller("InputTextController", ambryInputTextContoller);



// DIRECTIVE METHODS
// =============================================================================

  function ambryInputText() {

    var _template = 'templates/ambry-input-text.tpl';

    var _ambryInputText = {
      restrict:    'E',
      replace:     true,
      transclude:  true,
      scope:       {
        name:  '@',
        class: '@',
        value: '@',
        label: '@',
        model: '@'
      },
      compile:     _compile,
      link:        _link,
      templateUrl: _template
    }

    return _ambryInputText;

    function _link(scope, element, attrs) {
      console.log('link');
    }

    /* directive methods */
    function _compile() {
      return {
        pre: function(scope, element, attributes, controller, transcludeFn){
          console.log('pre mount: ', element[0].attributes.name, element[0].attributes.value);
        },
        post: function(scope, element, attributes, controller, transcludeFn){
          console.log('post mount: ', element[0].attributes.name, element[0].attributes.value);
        }
      }
    }

  }

  function ambryInputTextContoller($scope) {
    console.log($scope);
    console.log('=== Input Controller ===');
  }

}());

