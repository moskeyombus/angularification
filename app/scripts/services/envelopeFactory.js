'use strict';

angular.module('angularificationApp')
  .factory('envelopeFactory', function () {
    var Envelope = function(context) {
      this.attackTime = 0.1;
      this.releaseTime = 0.1;

      var that = this;
      return that;
    };

    Envelope.prototype.trigger = function(context) {
      var now = context.currentTime;
      this.param.cancelScheduledValues(now);
      this.param.setValueAtTime(0, now);
      this.param.linearRampToValueAtTime(1, now + this.attackTime);
      this.param.linearRampToValueAtTime(0, now + this.attackTime + this.releaseTime);
    };

    Envelope.prototype.connect = function (param) {
        this.param = param
    }

    // Public API here
    return {
      newEnvelope: function (context) {
        var envelope = new Envelope(context)
        return envelope
      }, 
    };
  });
