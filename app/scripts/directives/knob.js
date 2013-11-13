'use strict';

angular.module('angularificationApp')
  .directive('knob', function ($timeout) {
    return {
      restrict: 'AE',
      scope: {
        knobParam: '=ngModel'
      },
      link: function(scope, element, attrs) {
        //var $el = $(element);
        //scope.gainValue = element.val();
        element.knob({
          width: 60,
          'change' : function (value) {
            scope.knobParam = value;
            console.log(scope.knobParam)
          }
        });
        element.bind('blur', function () {
          console.log(scope.knobParam)
        });

        scope.$watch('number', function (number){
          element.val(number).change();
        });
        // scope.$watch('knobParam', function() {
        //   console.log(scope.knobParam)
        // }, true);
        // $timeout(function() {
        //   debugger
        // }, 5 * 1000);

      }
    };
  });
