'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'soundFactory', 'synthesizerService', function ($scope, soundFactory, synthService) {
    $scope.synth = 'synth'
    $scope.inherited = $scope.scopeTest
    
    var osc1 = synthService.$addVco('sine');
    var osc2 = synthService.$addVco('sawtooth');
    var osc3 = synthService.$addVco('sawtooth');
    var amp1 = synthService.$addVca();
    synthService.$connectNodes(osc1, amp1)
    synthService.$connectNodes(osc2, amp1)


    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context, data.frequency);
      synthService.$startNote($scope.context, data.note, sound)
    });

    $scope.$on('stopNote', function(event,data) {
      synthService.$stopNote(data.note)
    });

  }]);
