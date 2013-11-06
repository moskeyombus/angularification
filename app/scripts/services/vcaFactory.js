'use strict';

angular.module('angularificationApp')
  .factory('vcaFactory', function () {
    // Service logic
    // ...

    var VCA = function(context) {
      this.gain = context.createGain();
      this.gain.gain.value = 0;
      this.input = this.gain;
      this.output = this.gain;
      this.amplitude = this.gain.gain;

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
      newVca: function (context) {
        var vca = new VCA(context)
        return vca
      }
    };
  });
