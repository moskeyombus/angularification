'use strict';

describe('Controller: SynthesizerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var SynthesizerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SynthesizerCtrl = $controller('SynthesizerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
