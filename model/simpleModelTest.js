var should = require('should'),
    SimpleModel = require('./simpleModel');

describe('simpleModel', function(){
    describe('url', function(){
        describe('with no parameters', function(){
           it('should return \'api/simple\'', function(){
                new SimpleModel().url().should.equal('api/simple');
           });
        });

        describe('with id parameter',function(){
            it('should return \'api/simple/:id\'', function(){
                new SimpleModel({id:5}).url().should.equal('api/simple/5');
            });
        });
    });
});