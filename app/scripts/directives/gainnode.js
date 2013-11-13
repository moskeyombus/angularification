'use strict';

angular.module('angularificationApp')
  .directive('gainnode', function () {
    return {
      templateUrl: 'views/gainnode.html',
      restrict: 'A',
      scope:{
        id:'@'
      },
      controller: 'VcaCtrl',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
