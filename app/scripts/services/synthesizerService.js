'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', function synthesizerService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];
    var nodeCounter = 0;
    this.$envelopes = [];
    this.$nodes = [];
    this.$context = new webkitAudioContext;

    this.$addVco = function(type, frequency) {
      nodeCounter += 1;
      var vco = {
        id: nodeCounter,
        waveType: type,
        frequency: frequency,
        type: 'vco',
        connections: []
      };
      this.$nodes[nodeCounter] = vco;
      return vco;
    };

    this.$getNodes = function() {
      return this.$nodes;
    };

    this.$getNode = function(id) {
      return this.$nodes[id];
    },

    this.$addVca = function(gain) {
      nodeCounter += 1;
      var vca = {
        id: nodeCounter,
        type: 'vca',
        gainValue: gain,
        connections: []
      };
      this.$nodes[nodeCounter] = vca;
      return vca;
    };

    this.$addFinalOutput = function() {
      nodeCounter += 1;
      var output = {
        id: nodeCounter,
        type: 'final_output'
      };
      this.$nodes[nodeCounter] = output;
      return output;
    };

    this.$connectNodes = function(outNode,inNode,param) {
      var connection = {
        id: inNode.id,
        param: param
      };
      outNode.connections.push(connection);
    };


    this.$startNote = function(context, note, sound) {
      activeNotes[note] = sound;
      activeNotes[note].start(context);
    };

    this.$stopNote = function(note) {
      activeNotes[note].stop();
      delete activeNotes[note];
    };

  });
