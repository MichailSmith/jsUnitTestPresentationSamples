var should = require('should'),
    simpleModel = require('./simpleModel');

describe('simpleModel', function(){
    describe('url', function(){
        describe('with no parameters', function(){
           it('should return \'api/simple\'', function(){
                simpleModel.url().should.equal('api/simple');
           });
        });

        describe('with id parameter',function(){
            it('should return \'api/simple/:id\'', function(){
                simpleModel.url({id:5}).should.equal('api/simple/5');
            });
        });
    });
});