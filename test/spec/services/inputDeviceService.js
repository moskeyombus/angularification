'use strict';

describe('Service: inputDeviceService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var inputDeviceService;
  beforeEach(inject(function (_inputDeviceService_) {
    inputDeviceService = _inputDeviceService_;
  }));

  it('should do something', function () {
    expect(!!inputDeviceService).toBe(true);
  });

});
