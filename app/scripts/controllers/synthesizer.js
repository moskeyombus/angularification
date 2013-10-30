'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'vcoFactory', 'vcaFactory', 'envelopeFactory', 'soundFactory', 'inputDeviceService', 'synthesizerService', function ($scope, vcoFactory, vcaFactory, envelopeFactory, soundFactory, inputDeviceService, synthesizerService) {
    $scope.synth = 'synth'
    $scope.inherited = $scope.scopeTest
   //  $scope.vco = vcoFactory.newVco($scope.context);
   //  $scope.vca = vcaFactory.newVca($scope.context);
   //  $scope.envelope = envelopeFactory.newEnvelope($scope.context);
   //  $scope.vco.connect($scope.vca);
	  // $scope.envelope.connect($scope.vca.amplitude);
	  // $scope.vca.connect($scope.context.destination);

    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context);
      synthesizerService.$startNote($scope.context, data.note, data.frequency, sound)
        //$scope.vco.setFrequency($scope.context, data.frequency);
        //$scope.envelope.trigger($scope.context);
    });

    $scope.$on('stopNote', function(event,data) {
      synthesizerService.$stopNote(data.note)
    });

  }]);
