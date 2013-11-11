'use strict';

angular.module('angularificationApp')
  .factory('vcoFactory', function () {
    var VCO = function(context, type, frequency, id) {
      this.id = id;
      this.frequency = frequency;
      this.wave_type = type; 
      this.context = context;
      this.output;
      this.input;
      this.oscillator;
      // this.oscillatorType = type;

      this.buildOscillator = function () {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = this.wave_type;
        this.input = this.oscillator;
        this.output = this.oscillator;
        this.oscillator.frequency.setValueAtTime(this.frequency, this.context.currentTime);
        var that = this;
        return that
      };  

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
      newVco: function (context, type, frequency, id) {
        var vco = new VCO(context, type, frequency, id)
        return vco
      } 
    };
  });
