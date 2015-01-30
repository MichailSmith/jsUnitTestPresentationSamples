var canary = require('./canary');

describe('canary', function(){
    it('should be able to pass', function(){
        canary.should.be.ok;
    });
});