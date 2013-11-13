'use strict';

angular.module('angularificationApp')
  .directive('gainnode', function ($timeout) {
    return {
      templateUrl: 'views/gainnode.html',
      restrict: 'AE',
      scope:{
        id:'@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('id', function(value) {
          scope.vcaId = value;
        });
        scope.$watch('knobParam', function(value) {
          console.log('knobParam')
        });
        //         $timeout(function() {
        //   debugger
        // }, 5 * 1000);
      }
    };
  });
