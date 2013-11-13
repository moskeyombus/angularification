'use strict';

angular.module('angularificationApp')
  .factory('vcoFactory', function () {
    var VCO = function(context, type, frequency, id, connections) {
      this.id = id;
      this.frequency = frequency;
      this.type = 'vco';
      this.waveType = type;
      this.context = context;
      this.connections = connections;
      this.output = null;
      this.input = null;
      this.oscillator = null;
      // this.oscillatorType = type;

      this.buildOscillator = function () {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = this.waveType;
        this.input = this.oscillator;
        this.output = this.oscillator;
        this.oscillator.frequency.setValueAtTime(this.frequency, this.context.currentTime);
        var that = this;
        return that;
      };

      this.setFrequency = function (context, frequency) {
        this.oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      };

      this.connect = function(node) {
        if (node.hasOwnProperty('input')) {
          this.output.connect(node.input);
        } else {
          this.output.connect(node);
        }
      };

      var that = this;
      return that;
    };

    return {
      newVco: function (context, type, frequency, id, connections) {
        var vco = new VCO(context, type, frequency, id, connections);
        return vco;
      }
    };
  });
