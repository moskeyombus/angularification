'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', [ '$scope', 'synthesizerService' , function ($scope, synthService) {
    $scope.id = $scope.vcaId;
    $scope.thisNode = synthService.$getNode($scope.id);
    $scope.fuck = 0;
    $scope.gainValue = 0;
    $scope.amplitudeChange = function () {
         console.log('amplitude') 
    };
    console.log('test')
  }]);
