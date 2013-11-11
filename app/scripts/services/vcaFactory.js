'use strict';

angular.module('angularificationApp')
  .factory('vcaFactory', function () {

    var VCA = function(context, id, connections) {
      this.id = id;
      this.type = 'vca'
      this.gain;
      this.context = context;
      this.connections = connections;
      this.input;
      this.output;
      this.amplitude;

      this.buildAmplifier = function () {
        this.gain = context.createGain();
        this.gain.gain.value = 0.5;
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

    // Public API here
    return {
      newVca: function (context, id, connections) {
        var vca = new VCA(context, id, connections)
        return vca
      }
    };
  });
