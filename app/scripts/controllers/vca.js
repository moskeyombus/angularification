'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', ['$scope', 'synthesizerService', 'vcaService', function ($scope, synthService, vcaService) {
    $scope.id = $scope.vcaId;
    $scope.synthService = synthService;
    $scope.vcaService = vcaService;
    $scope.thisNode = synthService.$getNode($scope.id);
    $scope.gainValue = 0;

    $scope.updateGainValue = function(val) {
      var node, amp;
      $scope.gainValue = (val/100);
      node = $scope.synthService.$getNode($scope.id);
      amp = $scope.vcaService.$getVca($scope.id);
      node.gainValue = $scope.gainValue;
      amp.gain.gain.value = node.gainValue;
      $scope.synthService.$setNode($scope.id, node);
      $scope.vcaService.$setVca($scope.id, amp);
    };

    $scope.$on('gainValue', function (evt, value) {
      evt.currentScope.updateGainValue(value);
    });
  }]);
