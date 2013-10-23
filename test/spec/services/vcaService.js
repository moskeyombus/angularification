'use strict';

describe('Service: vcaService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var vcaService;
  beforeEach(inject(function (_vcaService_) {
    vcaService = _vcaService_;
  }));

  it('should do something', function () {
    expect(!!vcaService).toBe(true);
  });

});
