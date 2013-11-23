'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', ['$scope', 'synthesizerService', function ($scope, synthService) {
    $scope.id = parseInt($scope.vcaId);
    $scope.synthService = synthService;
    $scope.thisNode = synthService.$getNode($scope.id);
    $scope.gainValue = 0;

    $scope.updateGainValue = function(val) {
      var node, amp;
      $scope.gainValue = (val/100);
      node = $scope.synthService.$getNode($scope.id); 
      amp = $scope.synthService.$getAmp($scope.id);
      node.gainValue = $scope.gainValue;
      amp.gain.gain.value = node.gainValue;
      $scope.synthService.$setNode($scope.id, node);
      $scope.synthService.$setAmp($scope.id, amp);      
    }

    $scope.$on('gainValue', function (evt, value) {
      evt.currentScope.updateGainValue(value);
    });
  }]);
