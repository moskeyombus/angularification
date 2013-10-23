'use strict';

describe('Service: inputDevice', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var inputDevice;
  beforeEach(inject(function (_inputDevice_) {
    inputDevice = _inputDevice_;
  }));

  it('should do something', function () {
    expect(!!inputDevice).toBe(true);
  });

});
