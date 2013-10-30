'use strict';

describe('Service: soundFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var soundFactory;
  beforeEach(inject(function (_soundFactory_) {
    soundFactory = _soundFactory_;
  }));

  it('should do something', function () {
    expect(!!soundFactory).toBe(true);
  });

});
