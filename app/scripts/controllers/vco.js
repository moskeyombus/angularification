'use strict';

angular.module('angularificationApp')
  .controller('VcoCtrl', [ 'vcoFactory',  'synthesizerService', function ($scope, vcoFactory, synthesizerService) {
    $scope.addVco = function() {
      synthesizerService.addVco(vcoFactory.newVco($scope.context));
    };
  }]);
