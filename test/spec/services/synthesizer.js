'use strict';

describe('Service: synthesizer', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var synthesizer;
  beforeEach(inject(function (_synthesizer_) {
    synthesizer = _synthesizer_;
  }));

  it('should do something', function () {
    expect(!!synthesizer).toBe(true);
  });

});
