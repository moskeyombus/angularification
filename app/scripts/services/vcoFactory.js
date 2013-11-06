'use strict';

angular.module('angularificationApp')
  .factory('vcoFactory', function () {
    var VCO = function(context) {
      this.oscillator = context.createOscillator();
      this.oscillator.type = this.oscillator.SAWTOOTH;
      this.input = this.oscillator;
      this.output = this.oscillator;


      this.setFrequency = function (context, frequency) {
        this.oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      };

      this.connect = function(node) {
        if (node.hasOwnProperty('input')) {
          this.output.connect(node.input);
        } else {
          this.output.connect(node);
        };
      };

      var that = this;
      return that;
    };

    // VCO.prototype.connect = function(node) {
    //   if (node.hasOwnProperty('input')) {
    //     that.output.connect(node.input);
    //   } else {
    //     that.output.connect(node);
    //   };
    // };

    //VCO.prototype.

    return {
      newVco: function (context) {
        var vco = new VCO(context)
        return vco
      } 
    };
  });
