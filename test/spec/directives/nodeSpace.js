'use strict';

describe('Directive: nodeSpace', function () {

  // load the directive's module
  beforeEach(module('angularificationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<node-space></node-space>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nodeSpace directive');
  }));
});
