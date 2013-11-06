'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', ['vcoFactory', function synthesizerService(vcoFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];
    this.$vcos = [];
    this.$amplifiers = [];
    this.$envelopes = [];
    this.$context = new webkitAudioContext;

    this.$addVco = function(type, frequency) {
      var vco = {
        wave_type: type,
        frequency: frequency
      }
      this.$vcos.push(vco)
    }

    this.$getVcos = function(frequency) {
      var builtVcos = [];
      angular.forEach(this.$vcos, function(vco) {
        var new_vco = vcoFactory.newVco(this.$context, vco.wave_type, frequency)
        builtVcos.push(new_vco.buildOscillator());
      }, this)
      return builtVcos;
    }

    this.$getAmplifiers = function() {
      return this.$amplifiers;
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
