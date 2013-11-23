'use strict';

angular.module('angularificationApp')
  .controller('NodespaceCtrl', ['$scope', 'synthesizerService',  function ($scope, synthService) {
		$scope.currentNodes = synthService.$getNodes();
  }]);
