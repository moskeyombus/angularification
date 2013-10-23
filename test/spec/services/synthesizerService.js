'use strict';

describe('Service: synthesizerService', function () {

  // load the service's module
  beforeEach(module('angularificationApp'));

  // instantiate service
  var synthesizerService;
  beforeEach(inject(function (_synthesizerService_) {
    synthesizerService = _synthesizerService_;
  }));

  it('should do something', function () {
    expect(!!synthesizerService).toBe(true);
  });

});
