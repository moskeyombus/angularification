'use strict';

describe('Controller: KeyboardCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var KeyboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeyboardCtrl = $controller('KeyboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
