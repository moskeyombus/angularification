'use strict';

angular.module('angularificationApp')
  .service('synthesizerService', function synthesizerService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeNotes = [];

    this.$startNote = function(context, note, frequency, sound) {
      activeNotes[note] = sound;
      activeNotes[note].start(context, frequency);
      console.log(activeNotes);
    }

    this.$stopNote = function(note) {
      activeNotes[note].stop();
      delete activeNotes[note];
            console.log(activeNotes);
    }

  });
