var should = require('should'),
    SimpleModel = require('./simpleModel');

describe('simpleModel', function(){
    describe('with no parameters', function(){
        var model = new SimpleModel();

        describe('url', function(){
           it('should return "api/simple"', function(){
               model.url().should.equal('api/simple');
           });
        });
    });
    describe('with id parameter',function(){
        var model = new SimpleModel({ id: 5 });

        describe('url', function(){
            it('should return "api/simple/:id"', function(){
                model.url().should.equal('api/simple/5');
            });
        });
    });
    describe('save', function(){
        describe('with missing required parameter', function(){
            it('should fail to save', function(){
                var model = new SimpleModel(),
                    errorCalledCount = 0;

                model.on('invalid', function(){
                    errorCalledCount++;
                });

                model.save();
                errorCalledCount.should.equal(1);
            });
            it('should raise appropriate "invalid" event', function(){
                var model = new SimpleModel(),
                    errorParam = '';

                model.on('invalid', function(model, error){
                    errorParam = error;
                });

                model.save();
                errorParam.should.equal('requiredProperty is required');
            });
        });
    });
});