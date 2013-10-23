'use strict';

angular.module('angularificationApp')
  .factory('envelopeFactory', function () {
    // Service logic
    // ...

    var Envelope = function(context) {
      this.attackTime = 0.1;
      this.releaseTime = 0.1;

      var that = this;
      // $(document).bind('gateOn', function (_) {
      //   that.trigger();
      // });
      // $(document).bind('setAttack', function (_, value) {
      //   that.attackTime = value;
      // });
      // $(document).bind('setRelease', function (_, value) {
      //   that.releaseTime = value;
      // });
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