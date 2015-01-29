var should = require('should'),
    simpleModel = require('./simpleModel');

describe('simpleModel', function(){
    describe('url', function(){
        describe('with no parameters', function(){
           it('should return \'api/simple\'', function(){
             simpleModel.url().should.equal('api/simple');
           });
        });
    });
});