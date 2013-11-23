'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'soundFactory', 'synthesizerService', function ($scope, soundFactory, synthService) {
    $scope.synth = 'synth';
    $scope.inherited = $scope.scopeTest;
    
    var osc1 = synthService.$addVco('sawtooth');
    var osc2 = synthService.$addVco('sawtooth');
    var osc3 = synthService.$addVco('sine');
    var amp1 = synthService.$addVca(0.1);
    //var amp2 = synthService.$addVca(0.5);
    var out1 = synthService.$addFinalOutput();
    
    synthService.$connectNodes(osc1, amp1, 'input');
    synthService.$connectNodes(osc2, amp1, 'input');
    synthService.$connectNodes(osc3, amp1, 'input');
    synthService.$connectNodes(amp1, out1, 'input');
    //synthService.$connectNodes(amp2, out1, 'input');


    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context, data.frequency);
      synthService.$startNote($scope.context, data.note, sound);
    });

    $scope.$on('stopNote', function(event,data) {
      synthService.$stopNote(data.note);
    });
  }]);
