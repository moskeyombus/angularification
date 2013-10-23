'use strict';

describe('Service: vcaFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var vcaFactory;
  beforeEach(inject(function (_vcaFactory_) {
    vcaFactory = _vcaFactory_;
  }));

  it('should do something', function () {
    expect(!!vcaFactory).toBe(true);
  });

});
