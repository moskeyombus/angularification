'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', ['$scope', 'synthesizerService', function ($scope, synthService) {
    $scope.id = parseInt($scope.vcaId);
    $scope.synthService = synthService;
    $scope.thisNode = synthService.$getNode($scope.id);
    $scope.gainValue = 0;

    $scope.updateGainValue = function(val) {
      var node;
      $scope.gainValue = val;

      node = $scope.synthService.$getNode($scope.id)
      node.gainValue = (val/100);
      $scope.synthService.$setNode($scope.id, node)
      console.log($scope.gainValue);
    }

    $scope.$on('gainValue', function (evt, value) {
      evt.currentScope.updateGainValue(value);
    });
  }]);
