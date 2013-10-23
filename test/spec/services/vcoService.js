'use strict';

describe('Service: vcoService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var vcoService;
  beforeEach(inject(function (_vcoService_) {
    vcoService = _vcoService_;
  }));

  it('should do something', function () {
    expect(!!vcoService).toBe(true);
  });

});
