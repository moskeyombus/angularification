'use strict';

describe('Service: envelopeService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var envelopeService;
  beforeEach(inject(function (_envelopeService_) {
    envelopeService = _envelopeService_;
  }));

  it('should do something', function () {
    expect(!!envelopeService).toBe(true);
  });

});
