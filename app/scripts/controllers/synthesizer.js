'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'vcoFactory', 'vcaFactory', 'envelopeFactory', 'inputDeviceService', function ($scope, vcoFactory, vcaFactory, envelopeFactory, inputDeviceService) {
    $scope.synth = 'synth'
    $scope.inherited = $scope.scopeTest
    $scope.vco = vcoFactory.newVco($scope.context);
    $scope.vca = vcaFactory.newVca($scope.context);
    $scope.envelope = envelopeFactory.newEnvelope($scope.context);
    $scope.vco.connect($scope.vca);
	  $scope.envelope.connect($scope.vca.amplitude);
	  $scope.vca.connect($scope.context.destination);
    inputDeviceService.$bindSynthKeys();

    $scope.$on('note', function() {
        $scope.vco.setFrequency(440);
        $scope.envelope.trigger($scope.context);
    });

  }]);
