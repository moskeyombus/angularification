'use strict';

describe('Service: synthesizerFactory', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var synthesizerFactory;
  beforeEach(inject(function (_synthesizerFactory_) {
    synthesizerFactory = _synthesizerFactory_;
  }));

  it('should do something', function () {
    expect(!!synthesizerFactory).toBe(true);
  });

});
