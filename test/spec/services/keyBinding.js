'use strict';

describe('Service: keyBinding', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var keyBinding;
  beforeEach(inject(function (_keyBinding_) {
    keyBinding = _keyBinding_;
  }));

  it('should do something', function () {
    expect(!!keyBinding).toBe(true);
  });

});
