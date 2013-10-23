'use strict';

angular.module('angularificationApp')
  .service('inputDeviceService', function inputDeviceService($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	var depressedKeys = {};
    this.$isEmpty = function(obj) {
        return Object.keys(obj).length === 0;
    }
  	this.$bindSynthKeys = function() {
      var key_combos = [
        {
          'keys' : 'a',
          "on_keydown"    : function() {
            console.log(depressedKeys);
            $rootScope.$broadcast('note');
            // vco.frequency.value = frequency;
            // vca.gain.value = 1;
            // this.$depressedKeys[note] = true;
            // //$rootScope.oscillator.start(0);
          },
          "on_keyup"      : function(e) {
            console.log("And now you've released one of the keys.");
           //  delete this.$depressedKeys[note];
        	  // if (this.$isEmpty(this.$depressedKeys)) {
           //    vca.gain.value = 0;
           //  }
          },
          "prevent_repeat": true
        }

      ]

      // keypress.combo("a", function() {
      //     console.log("You pressed shift and s");
      // });
      keypress.register_many(key_combos);
    }
  });
