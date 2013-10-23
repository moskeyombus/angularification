'use strict';

angular.module('angularificationApp')
  .factory('vcoFactory', function () {
    // Service logic
    // ...
    var VCO = function(context) {
        this.oscillator = context.createOscillator();
        this.oscillator.type = this.oscillator.SAWTOOTH;
        this.oscillator.frequency.value = 440;
        this.oscillator.start(0);

        this.input = this.oscillator;
        this.output = this.oscillator;

        var that = this;
        // $(document).bind('frequency', function (_, frequency) {
        //   that.setFrequency(frequency);
        // });
        return that;
      };

      VCO.prototype.connect = function(node) {
        if (node.hasOwnProperty('input')) {
          this.output.connect(node.input);
        } else {
          this.output.connect(node);
        };
      };

      VCO.prototype.setFrequency = function (context, frequency) {
        this.oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      };

    // Public API here
    return {
      newVco: function (context) {
        var vco = new VCO(context)
        return vco
      } 
    };
  });
