'use strict';

describe('Service: vcoFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var vcoFactory;
  beforeEach(inject(function (_vcoFactory_) {
    vcoFactory = _vcoFactory_;
  }));

  it('should do something', function () {
    expect(!!vcoFactory).toBe(true);
  });

});
