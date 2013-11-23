'use strict';

angular.module('angularificationApp')
  .directive('knob', function () {
    return {
      restrict: 'AE',
      scope: {
        knobParam: '=ngModel',
        name: '@'
      },
      link: function(scope, element, attrs) {
        element.knob({
          width: 60,
          'change' : function (value) {
            scope.knobParam = value;
            scope.$emit(scope.name, scope.knobParam);
          }
        });
        element.bind('blur', function () {
          scope.$emit(scope.name, scope.knobParam);
        });
        scope.$watch('number', function (number){
          element.val(number).change();
        });
      }
    };
  });
