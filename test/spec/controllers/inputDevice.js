'use strict';

describe('Controller: InputdeviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var InputdeviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputdeviceCtrl = $controller('InputdeviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
