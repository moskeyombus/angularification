'use strict';

angular.module('angularificationApp')
  .service('vcaService', ['synthesizerService', 'vcaFactory', function vcaService(synthService, vcaFactory) {
    this.$amplifiers = [];

    this.$addVca = function() {
      var builtVca;
      var vca = {
        id: synthService.$newId(),
        type: 'vca',
        gainValue: 0,
        connections: []
      };
      synthService.$setNode(vca);
      builtVca = vcaFactory.newVca(synthService.$getContext(), vca.id, vca.gainValue, vca.connections);
      this.$amplifiers[vca.id] = builtVca;
      return builtVca.buildAmplifier();
    };

    this.$getVca = function(id) {
      return this.$amplifiers[id];
    };

    this.$setVca = function(id, amp) {
      this.$amplifiers[id] = amp;
    };
  
  }]);
