'use strict';

angular.module('angularificationApp')
  .controller('SynthnodeCtrl', ['$scope', 'vcoFactory', function ($scope, vcoFactory) {
  	
    $scope.nodeType = null;

    $scope.initNode = function(type) {
  	  switch(type) {
        case 'vco':
          $scope.nodeType = 'vco';
          $scope.vco = vcoFactory.newVco();
          break;
        default:
          $scope.nodeType = null
      }

      
  	}


  }]);
