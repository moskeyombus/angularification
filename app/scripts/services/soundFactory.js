'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcoFactory', 'vcaFactory', 'envelopeFactory', function (vcoFactory, vcaFactory, envelopeFactory) {
    // Service logic
    // ...
    var Sound = function(context, frequency) {
      this.vco = vcoFactory.newVco(context);
      this.vca = vcaFactory.newVca(context);
      this.envelope = envelopeFactory.newEnvelope(context);
      this.vco.connect(this.vca);
      this.envelope.connect(this.vca.amplitude);
      this.vca.connect(context.destination);
      var that = this;
      return that;
    }
    
    Sound.prototype.start = function(context, frequency) {
      console.log('start')
      this.vco.setFrequency(context, frequency);
      this.envelope.trigger(context);
    };

    Sound.prototype.stop = function() {
      console.log('stop')
    };

    // Public API here
    return {
      newSound: function (context) {
        var sound = new Sound(context)
        return sound
      } 
    };
  }]);
