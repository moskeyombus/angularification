'use strict';

describe('Controller: VcaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var VcaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VcaCtrl = $controller('VcaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
