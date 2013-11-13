'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', [ '$scope', 'synthesizerService' , function ($scope, synthService) {
    $scope.gain = 'Gain';
    $scope.$watch('id', function(value) {
      $scope.id = value;
      $scope.thisNode = synthService.$getNode(value);
      console.log($scope.thisNode);
    });

  }]);
