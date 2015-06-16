'use strict';

angular.module('angularificationApp')
  .service('inputDeviceService', function inputDeviceService($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.$isEmpty = function(obj) {
      return Object.keys(obj).length === 0;
    };
    this.$bindSynthKeys = function() {
      var keyboard = new QwertyHancock({id: 'keyboard', startNote: 'A4', octaves: 2});

      keyboard.keyDown = function (note, frequency) {
        console.log("test")
        $rootScope.$broadcast('note', {
          frequency: frequency,
          note: note
        });
      };

      keyboard.keyUp = function (note) {
        $rootScope.$broadcast('stopNote', {
          note: note
        });
      };
    };
  });
