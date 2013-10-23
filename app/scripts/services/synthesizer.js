'use strict';

angular.module('angularificationApp')
  .service('Synthesizer', function Synthesizer() {
    // AngularJS will instantiate a singleton by calling "new" on this function
	  this.$initAudioContext = function() {
	      return new webkitAudioContext;
	  }
	  this.$Vco = function(context) {
      this.oscillator = context.createOscillator();
      this.oscillator.type = this.oscillator.SAWTOOTH;
      this.setFrequency(440);
      this.oscillator.start(0);

      this.input = this.oscillator;
      this.output = this.oscillator;

      var that = this;
      // $(document).bind('frequency', function (_, frequency) {
      //   that.setFrequency(frequency);
      // });
      this.setFrequency = function(frequency) {
        this.oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      }
      this.connect = function(node) {
        if (node.hasOwnProperty('input')) {
          this.output.connect(node.input);
        } else {
          this.output.connect(node);
        };
      }
      
	  }
    this.$initVca = function(context) {
      var vca = context.createGain();
      vca.gain.value = 0;
      return vca
    }
  });
