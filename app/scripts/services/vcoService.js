'use strict';

angular.module('angularificationApp')
  .service('Vcoservice', function Vcoservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return {
  		newVco:function (type, frequency) {
        this.buildOscillator(type, frequency)
        this.startOscillator();
        this.setConnections();
      },
      buildOscillator:function (type, frequency) {
        this.oscillator = context.createOscillator();
      },
      deleteNote:function (id) {
      }
  	}

  
  });
