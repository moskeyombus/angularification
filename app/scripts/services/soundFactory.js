'use strict';

angular.module('angularificationApp')
  .factory('soundFactory', ['vcoFactory', 'vcaService', 'envelopeFactory', 'synthesizerService', function (vcoFactory, vcaService, envelopeFactory, synthService) {
    var Sound = function(context, frequency) {
      this.nodes = [];
      this.currentNodes = {};
      this.frequency = frequency;
      this.context = context;

      // This should be refactored to work recursively
      // ?? maybe ??  only dynamically building oscillators now
      this.cNodes = this.buildNodes(this.frequency);
      this.currentNodes = this.buildConnections(this.cNodes);
      //this.envelope = envelopeFactory.newEnvelope(synthService.$context);
      //this.envelope.connect(this.vcas[0].amplitude);

      var that = this;
      return that;
    };
    
    Sound.prototype.start = function() {
      this.now = synthService.$context.currentTime;
      angular.forEach(this.currentNodes, function(node) {
        if (node.type === 'vco') {
          node.oscillator.start(this.now);
          this.nodes.push(node.oscillator);
        }
      }, this);
    };

    Sound.prototype.stop = function() {
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].stop(0);
      }
    };

    // ###TODO Nodes and connections should be built at the same time, recursively
    // Start with node 0.  Build it then checks its connections.
    // For each connection, if it doesnt exist, call build on it
    // If it does exist, connect to it, then check the next node.
    // The first build call could potentially chain a whole bunch, always
    // return the built node on the build call so a connection is made
    Sound.prototype.buildNodes = function(frequency) {
      var builtNodes = [];
      angular.forEach(synthService.$getNodes(), function(node) {
        // switch to case statement
        if (node.type === 'vco') {
          var newVco = vcoFactory.newVco(synthService.$context, node.waveType, frequency, node.id, node.connections);
          builtNodes[node.id] = newVco.buildOscillator();
        }
        else if (node.type === 'vca') {
          builtNodes[node.id] = vcaService.$getVca(node.id);
        }
        else if (node.type === 'final_output') {
          builtNodes[node.id] = synthService.$context.destination;
        }
      }, this);
      return builtNodes;
    };

    Sound.prototype.buildConnections = function(currentNodes) {
      angular.forEach(currentNodes, function(node) {
        angular.forEach(node.connections, function(output){
          // TODO check for param type (input, amplitutde, etc)
          node.connect(currentNodes[output.id]);
        }, this);
      }, this);
      return currentNodes;
    };

    // Public API here
    return {
      newSound: function (context, frequency) {
        var sound = new Sound(synthService.$context, frequency);
        return sound;
      }
    };
  }]);
