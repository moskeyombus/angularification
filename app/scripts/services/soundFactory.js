'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcaFactory', 'envelopeFactory', 'synthesizerService', function (vcaFactory, envelopeFactory, synthService) {
    // Service logic
    // ...
    var Sound = function(context, frequency) {
      this.nodes = [];
      this.frequency = frequency;
      //this.context = context


      // synthService.$addVco('sawtooth', this.frequency);
      // synthService.$addVco('sine', this.frequency);

      this.vcos = synthService.$getVcos(this.frequency);
      //this.oscillators.setFrequencies(frequency);
      // angular.forEach(this.vcos, function(vco) {
      //   vco.setFrequency(synthService.$context, this.frequency)
      //   //debugger
      // }, this);
      //this.vco = vcoFactory.newVco(context);
      //this.vco.setFrequency(context, this.frequency);
      //this.vco2 = vcoFactory.newVco(context);
      //this.vco2.setFrequency(context, this.frequency);
      //this.vco2.oscillator.type = this.vco2.oscillator.SINE;
      //this.amplifiers = synthService.$getAmplifiers();
      this.vca = vcaFactory.newVca(synthService.$context);
      this.envelope = envelopeFactory.newEnvelope(synthService.$context);
      //this.vco.connect(this.vca);
      //this.vco2.connect(this.vca);
      angular.forEach(this.vcos, function(vco) {
        vco.connect(this.vca);
      }, this);
      this.envelope.connect(this.vca.amplitude);
      this.vca.connect(synthService.$context.destination);
      var that = this;
      return that;
    }
    
    Sound.prototype.start = function(context) {
      this.now = synthService.$context.currentTime;
      angular.forEach(this.vcos, function(vco) {
        vco.oscillator.start(this.now)
      }, this);
      //this.vco.oscillator.start(now);
      //this.vco2.oscillator.start(now);
      this.envelope.trigger(synthService.$context);
      angular.forEach(this.vcos, function(vco) {
        this.nodes.push(vco.oscillator);
      }, this);
      //this.nodes.push(this.vco.oscillator);
      //this.nodes.push(this.vco2.oscillator);
    };

    Sound.prototype.stop = function() {
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].stop(0);
      }
    };

    // Public API here
    return {
      newSound: function (context, frequency) {
        var sound = new Sound(synthService.$context, frequency)
        return sound
      } 
    };
  }]);
