'use strict';

angular.module('angularificationApp')
  .service('Keybinding', function Keybinding() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.$depressedKeys = {};
    this.$isEmpty = function(obj) {
        return Object.keys(obj).length === 0;
    }
  	this.$bindSynthKeys = function(vco, vca, note, frequency) {
      var key_combos = [
        {
          'keys' : 'a',
          "on_keydown"    : function() {
            debugger
            console.log(this.$depressedKeys);
	          vco.frequency.value = frequency;
	          vca.gain.value = 1;
	          this.$depressedKeys[note] = true;
            //$rootScope.oscillator.start(0);
          },
          "on_keyup"      : function(e) {
            console.log("And now you've released one of the keys.");
            delete this.$depressedKeys[note];
        	  if (this.$isEmpty(this.$depressedKeys)) {
              vca.gain.value = 0;
            }
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
