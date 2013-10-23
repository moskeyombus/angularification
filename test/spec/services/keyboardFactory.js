'use strict';

describe('Service: keyboardFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var keyboardFactory;
  beforeEach(inject(function (_keyboardFactory_) {
    keyboardFactory = _keyboardFactory_;
  }));

  it('should do something', function () {
    expect(!!keyboardFactory).toBe(true);
  });

});
