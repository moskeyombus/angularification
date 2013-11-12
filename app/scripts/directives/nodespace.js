'use strict';

angular.module('angularificationApp')
  .directive('nodespace', function () {
    return {
      templateUrl: 'views/nodespace.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
