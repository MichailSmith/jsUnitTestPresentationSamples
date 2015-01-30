require('should');
var canarySystemUnderTest = require('./canarySystemUnderTest');

describe('canary', function(){
    it('should be able to pass', function(){
        canarySystemUnderTest.should.be.ok;
    });
});