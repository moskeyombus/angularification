'use strict';

angular.module('angularificationApp')
  .service('inputDeviceService', function inputDeviceService($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var depressedKeys = {};
    this.$isEmpty = function(obj) {
        return Object.keys(obj).length === 0;
    }
  	this.$bindSynthKeys = function() {
      var keyboard = qwertyHancock({id: 'keyboard', startNote: 'A4', octaves: 2});
      keyboard.keyDown(function (note, frequency) {
        console.log(note, frequency);
        $rootScope.$broadcast('note', {
          frequency: frequency
        });
      });
      keyboard.keyUp(function () { });
    }
  });
