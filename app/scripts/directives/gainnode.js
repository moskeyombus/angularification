'use strict';

angular.module('angularificationApp')
  .directive('gainnode', function () {
    return {
      templateUrl: 'views/gainnode.html',
      restrict: 'AE',
      controller: 'VcaCtrl',
      scope:{
        id:'@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('id', function(value) {
          scope.vcaId = value;
        });
      }
    };
  });
