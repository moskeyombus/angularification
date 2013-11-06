'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'soundFactory', 'synthesizerService', function ($scope, soundFactory, synthService) {
    $scope.synth = 'synth'
    $scope.inherited = $scope.scopeTest
    
    synthService.$addVco('sine');
    synthService.$addVco('sawtooth');
    synthService.$addVco('sawtooth');

    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context, data.frequency);
      synthService.$startNote($scope.context, data.note, sound)
    });

    $scope.$on('stopNote', function(event,data) {
      synthService.$stopNote(data.note)
    });

  }]);
