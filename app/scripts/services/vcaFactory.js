'use strict';

angular.module('angularificationApp')
  .factory('vcaFactory', function () {

    var VCA = function(context, id) {
      this.id = id;
      this.gain;
      this.context = context;
      this.input;
      this.output;
      this.amplitude;

      this.buildAmplifier = function () {
        this.gain = context.createGain();
        this.gain.gain.value = 0;
        this.input = this.gain;
        this.output = this.gain;
        this.amplitude = this.gain.gain;
        var that = this;
        return that
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

    // VCA.prototype.connect = function(node) {
    //   if (node.hasOwnProperty('input')) {
    //     this.output.connect(node.input);
    //   } else {
    //     this.output.connect(node);
    //   };
    // };

    // Public API here
    return {
      newVca: function (context, id) {
        var vca = new VCA(context, id)
        return vca
      }
    };
  });
