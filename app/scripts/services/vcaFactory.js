'use strict';

angular.module('angularificationApp')
  .factory('vcaFactory', function () {

    var VCA = function(context, id, gainValue, connections) {
      this.id = id;
      this.type = 'vca';
      this.gain = null;
      this.gainValue = gainValue;
      this.context = context;
      this.connections = connections;
      this.input = null;
      this.output = null;
      this.amplitude = null;

      this.buildAmplifier = function () {
        this.gain = context.createGain();
        this.gain.gain.value = this.gainValue;
        this.input = this.gain;
        this.output = this.gain;
        this.amplitude = this.gain.gain;
        var that = this;
        return that;
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

    // Public API here
    return {
      newVca: function (context, id, gainValue, connections) {
        var vca = new VCA(context, id, gainValue, connections);
        return vca;
      }
    };
  });
