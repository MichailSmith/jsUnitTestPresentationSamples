var should = require('should'),
    SimpleModel = require('./simpleModel');

describe('simpleModel', function(){
    describe('with no parameters', function(){
        var model = new SimpleModel();

        describe('url', function(){
           it('should return \'api/simple\'', function(){
               model.url().should.equal('api/simple');
           });
        });
    });
    describe('with id parameter',function(){
        var model = new SimpleModel({id:5});

        describe('url', function(){
            it('should return \'api/simple/:id\'', function(){
                model.url().should.equal('api/simple/5');
            });
        });
    });
});