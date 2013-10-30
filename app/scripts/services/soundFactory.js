'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcoFactory', 'vcaFactory', 'envelopeFactory', function (vcoFactory, vcaFactory, envelopeFactory) {
    // Service logic
    // ...
    var Sound = function(context, frequency) {
      this.nodes = []
      this.frequency = frequency
      this.vco = vcoFactory.newVco(context);
      this.vco.setFrequency(context, this.frequency);
      this.vca = vcaFactory.newVca(context);
      this.envelope = envelopeFactory.newEnvelope(context);
      this.vco.connect(this.vca);
      this.envelope.connect(this.vca.amplitude);
      this.vca.connect(context.destination);
      var that = this;
      return that;
    }
    
    Sound.prototype.start = function(context) {
      var now = context.currentTime;
      this.vco.oscillator.start(now)
      this.envelope.trigger(context);
      this.nodes.push(this.vco.oscillator);
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
