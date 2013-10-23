'use strict';

angular.module('angularificationApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  	
  	$scope.scopeTest = 'global'
  	$scope.context = new webkitAudioContext;
	  $scope.initSynth = function(){

	  }

  }]);
