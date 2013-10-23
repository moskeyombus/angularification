'use strict';

describe('Controller: SynthnodeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularificationApp'));

  var SynthnodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SynthnodeCtrl = $controller('SynthnodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
