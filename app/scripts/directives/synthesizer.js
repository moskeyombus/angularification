'use strict';

angular.module('angularificationApp')
  .directive('synthesizer',['inputDeviceService', function (inputDeviceService) {
    return {
      templateUrl: 'views/synthesizer.html',
      restrict: 'A',
      link: function postLink($scope, element, attrs) {
        inputDeviceService.$bindSynthKeys();
      }
    };
  }]);
