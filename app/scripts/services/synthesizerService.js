'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', ['vcoFactory', 'vcaFactory', function synthesizerService(vcoFactory, vcaFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];
    var nodeCounter = 0;
    this.$currentNodes = [];
    this.$envelopes = [];
    this.$nodes = [];
    this.$context = new webkitAudioContext;

    this.$addVco = function(type, frequency) {
      nodeCounter += 1;
      var vco = {
        id: nodeCounter,
        wave_type: type,
        frequency: frequency,
        type: 'vco',
        connections: []
      }
      this.$nodes.push(vco)
      this.$currentNodes[nodeCounter] = vco
      return vco;
    }

    this.$getNodes = function(frequency) {
      return this.$nodes;
    }

    this.$addVca = function() {
      nodeCounter += 1;
      var vca = {
        id: nodeCounter,
        type: 'vca',
        connections: []
      }
      this.$nodes.push(vca);
      this.$currentNodes[nodeCounter] = vca;
      return vca;
    }

    this.$addFinalOutput = function() {
      nodeCounter += 1;
      var output = {
        id: nodeCounter,
        type: 'final_output'
      }
      this.$nodes.push(output);
      this.$currentNodes[nodeCounter] = output;
      return output;
    }

    this.$connectNodes = function(outNode,inNode,param) {
      var connection = {
        id: inNode.id,
        param: param
      }
      outNode.connections.push(connection)
    }


    this.$startNote = function(context, note, sound) {
      activeNotes[note] = sound;
      activeNotes[note].start(context);
    }

    this.$stopNote = function(note) {
      activeNotes[note].stop();
      delete activeNotes[note];
    }
    
  }]);
