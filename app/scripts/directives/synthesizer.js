'use strict';

angular.module('angularificationApp')
  .directive('synthesizer',['inputDeviceService', function (inputDeviceService) {
    return {
      template: '<div id="keyboard"></div>',
      restrict: 'A',
      link: function postLink($scope, element, attrs) {
        inputDeviceService.$bindSynthKeys();
        //element.text('this is the synthesizer directive');
      }
    };
  }]);
