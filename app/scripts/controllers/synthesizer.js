'use strict';

angular.module('angularificationApp')
  .controller('SynthesizerCtrl', ['$scope', 'soundFactory', 'synthesizerService', 'vcaService', function ($scope, soundFactory, synthService, vcaService) {
    $scope.synth = 'synth';
    $scope.inherited = $scope.scopeTest;
    
    var osc1 = synthService.$addVco('sawtooth');
    var osc2 = synthService.$addVco('triangle');
    var osc3 = synthService.$addVco('sine');
    var amp1 = vcaService.$addVca();
    var amp2 = vcaService.$addVca();
    var amp3 = vcaService.$addVca();
    var out1 = synthService.$addFinalOutput();
    
    synthService.$connectNodes(osc1, amp1, 'input');
    synthService.$connectNodes(osc2, amp2, 'input');
    synthService.$connectNodes(osc3, amp3, 'input');
    synthService.$connectNodes(amp1, out1, 'input');
    synthService.$connectNodes(amp2, out1, 'input');
    synthService.$connectNodes(amp3, out1, 'input');

    $scope.$on('note', function(event,data) {
      var sound = soundFactory.newSound($scope.context, data.frequency);
      synthService.$startNote($scope.context, data.note, sound);
    });

    $scope.$on('stopNote', function(event,data) {
      synthService.$stopNote(data.note);
    });
  }]);
