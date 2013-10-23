'use strict';

describe('Service: inputDeviceFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var inputDeviceFactory;
  beforeEach(inject(function (_inputDeviceFactory_) {
    inputDeviceFactory = _inputDeviceFactory_;
  }));

  it('should do something', function () {
    expect(!!inputDeviceFactory).toBe(true);
  });

});
