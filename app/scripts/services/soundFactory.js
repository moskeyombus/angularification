'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcaFactory', 'envelopeFactory', 'synthesizerService', function (vcaFactory, envelopeFactory, synthService) {
    // Service logic
    // ...
    var Sound = function(context, frequency) {
      this.nodes = [];
      this.frequency = frequency;

      // yeah look how nice that is
      // may end up using a service for each node type
      this.vcos = synthService.$getVcos(this.frequency);

      //var test_vca = vcaFactory.newVca(synthService.$context);
      //this.vca = test_vca.buildAmplifier();
      this.vcas = synthService.$getVcas();
      this.envelope = envelopeFactory.newEnvelope(synthService.$context);

      // for connections, generate random string 
      // (w/ storage of all used for collision check)
      // attach to any node as an ID
      // angular has a 'filter' method for finding node in array
      // #########
      // or just have a counter that increments each time and ID is assigned
      // to a node.  easier.  node only has to know connected node IDs
      // will need to account for normal input vs params input
      angular.forEach(this.vcos, function(vco) {
        vco.connect(this.vcas[0]);
      }, this);
      this.envelope.connect(this.vcas[0].amplitude);
      this.vcas[0].connect(synthService.$context.destination);
      var that = this;
      return that;
    }
    
    Sound.prototype.start = function(context) {
      this.now = synthService.$context.currentTime;
      angular.forEach(this.vcos, function(vco) {
        vco.oscillator.start(this.now)
      }, this);
      this.envelope.trigger(synthService.$context);
      angular.forEach(this.vcos, function(vco) {
        this.nodes.push(vco.oscillator);
      }, this);
    };

    Sound.prototype.stop = function() {
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].stop(0);
      }
    };

    // Public API here
    return {
      newSound: function (context, frequency) {
        var sound = new Sound(synthService.$context, frequency)
        return sound
      } 
    };
  }]);
