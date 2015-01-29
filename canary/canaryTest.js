var canarySystemUnderTest = require('./canarySystemUnderTest');
require('should');

describe('tests', function(){
    it('should be able to  pass', function(){
        canarySystemUnderTest.should.be.ok;
    });
});