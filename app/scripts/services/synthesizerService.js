'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', function synthesizerService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];
    this.$oscillators = [];
    this.$amplifiers = [];
    this.$envelopes = [];

    this.$getOscillators = function() {
      return this.$oscillators;
    }

    this.$getAmplifiers = function() {
      return this.$amplifiers;
    }

    this.$startNote = function(context, note, sound) {
      activeNotes[note] = sound;
      activeNotes[note].start(context);
    }

    this.$stopNote = function(note) {
      activeNotes[note].stop();
      delete activeNotes[note];
    }

  });
