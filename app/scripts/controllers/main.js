'use strict';

angular.module('angularificationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Time',
      'Space',
      'Light',
      'Gravity'
    ];
   	$scope.showtooltip = false;
	$scope.value = 'Edit me.';
	$scope.hideTooltip = function(){
		console.log('hide');
		$scope.showtooltip = false;
	}
	$scope.toggleTooltip = function(e){
		console.log('toggle')
		e.stopPropagation();
		$scope.showtooltip = !$scope.showtooltip;
	}
  });
