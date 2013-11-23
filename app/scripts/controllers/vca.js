'use strict';

angular.module('angularificationApp')
  .controller('VcaCtrl', [ '$scope', 'synthesizerService' , function ($scope, synthService) {
    $scope.id = $scope.vcaId;
    $scope.thisNode = synthService.$getNode($scope.id);
    $scope.knobParam = 0;
    $scope.gainValue = 0;
    $scope.amplitudeChange = function (param) {
         console.log('param') 
    };
    $scope.$watch('knobParam', function (value) {
        console.log('knobz')
    });
    $scope.$on('gainValue', function (evt, value) {
      console.log(value);
    });
    console.log('test')
  }]);
