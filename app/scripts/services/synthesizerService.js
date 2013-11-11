'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', ['vcoFactory', 'vcaFactory', function synthesizerService(vcoFactory, vcaFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];
    var nodeCounter = 0;
    this.$currentNodes = [];
    this.$vcos = [];
    this.$vcas = [];
    this.$envelopes = [];
    this.$context = new webkitAudioContext;

    this.$addVco = function(type, frequency) {
      nodeCounter += 1;
      var vco = {
        id: nodeCounter,
        wave_type: type,
        frequency: frequency,
        connections: []
      }
      this.$vcos.push(vco)
      this.$currentNodes[nodeCounter] = vco
      return vco;
    }

    this.$getVcos = function(frequency) {
      var builtVcos = [];
      angular.forEach(this.$vcos, function(vco) {
        var new_vco = vcoFactory.newVco(this.$context, vco.wave_type, frequency)
        builtVcos.push(new_vco.buildOscillator());
      }, this)
      return builtVcos;
    }

    this.$addVca = function() {
      nodeCounter += 1;
      var vca = {
        id: nodeCounter,
        connections: []
      }
      this.$vcas.push(vca);
      this.$currentNodes[nodeCounter] = vca;
      return vca;
    }

    this.$getVcas = function() {
      var builtVcas = [];
      angular.forEach(this.$vcas, function(vca) {
        var new_vca = vcaFactory.newVca(this.$context);
        builtVcas.push(new_vca.buildAmplifier());
      }, this)
      return builtVcas;
    }

    this.$connectNodes = function(input,output) {
      input.connections.push(output.id)
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
