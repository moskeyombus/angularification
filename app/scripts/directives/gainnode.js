'use strict';

angular.module('angularificationApp')
  .directive('gainnode', function () {
    return {
      template: '<div class="gain"></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the gainnode directive');
      }
    };
  });
