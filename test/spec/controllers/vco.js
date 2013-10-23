'use strict';

describe('Controller: VcoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var VcoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VcoCtrl = $controller('VcoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
