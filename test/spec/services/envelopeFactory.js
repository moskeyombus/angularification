'use strict';

describe('Service: envelopeFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var envelopeFactory;
  beforeEach(inject(function (_envelopeFactory_) {
    envelopeFactory = _envelopeFactory_;
  }));

  it('should do something', function () {
    expect(!!envelopeFactory).toBe(true);
  });

});
