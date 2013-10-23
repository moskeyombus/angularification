'use strict';

describe('Service: keyboardService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var keyboardService;
  beforeEach(inject(function (_keyboardService_) {
    keyboardService = _keyboardService_;
  }));

  it('should do something', function () {
    expect(!!keyboardService).toBe(true);
  });

});
