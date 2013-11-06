'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcoFactory', 'vcaFactory', 'envelopeFactory', 'synthesizerService', function (vcoFactory, vcaFactory, envelopeFactory, synthesizerService) {
    // Service logic
    // ...
    var Sound = function(context, frequency) {
      this.nodes = [];
      this.frequency = frequency;
      this.context = context
      this.test = vcoFactory.newVco(context);
      synthesizerService.$addVco(this.test)
      this.test = vcoFactory.newVco(context);
      synthesizerService.$addVco(this.test)
      this.vcos = synthesizerService.$getVcos();
      //this.oscillators.setFrequencies(frequency);
      angular.forEach(this.vcos, function(vco) {
        vco.setFrequency(this.context, this.frequency)
        //debugger
      }, this);
      //this.vco = vcoFactory.newVco(context);
      //this.vco.setFrequency(context, this.frequency);
      //this.vco2 = vcoFactory.newVco(context);
      //this.vco2.setFrequency(context, this.frequency);
      //this.vco2.oscillator.type = this.vco2.oscillator.SINE;
      //this.amplifiers = synthesizerService.$getAmplifiers();
      this.vca = vcaFactory.newVca(this.context);
      this.envelope = envelopeFactory.newEnvelope(this.context);
      //this.vco.connect(this.vca);
      //this.vco2.connect(this.vca);
      angular.forEach(this.vcos, function(vco) {
        vco.connect(this.vca)
      }, this);
      this.envelope.connect(this.vca.amplitude);
      this.vca.connect(this.context.destination);
      var that = this;
      return that;
    }
    
    Sound.prototype.start = function(context) {
      this.now = context.currentTime;
      angular.forEach(this.vcos, function(vco) {
        debugger
        vco.oscillator.start(this.now)
      }, this);
      //this.vco.oscillator.start(now);
      //this.vco2.oscillator.start(now);
      this.envelope.trigger(context);
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
        var sound = new Sound(context, frequency)
        return sound
      } 
    };
  }]);
