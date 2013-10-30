'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'vcoFactory', 'vcaFactory', 'envelopeFactory', 'soundFactory', 'inputDeviceService', 'synthesizerService', function ($scope, vcoFactory, vcaFactory, envelopeFactory, soundFactory, inputDeviceService, synthesizerService) {
    $scope.synth = 'synth'
    $scope.inherited = $scope.scopeTest

    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context, data.frequency);
      synthesizerService.$startNote($scope.context, data.note, sound)
    });

    $scope.$on('stopNote', function(event,data) {
      synthesizerService.$stopNote(data.note)
    });

  }]);
