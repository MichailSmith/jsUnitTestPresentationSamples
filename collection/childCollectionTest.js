var should = require('should'),
    ChildCollection = require('./childCollection');


describe('ChildCollection with parentId', function(){
    var model = new ChildCollection({ parentId: 5 });

    describe('parse', function(){
        it('returns response.data', function(){
            model.parse({ data: 'sample data' }).should.equal('sample data');
        });
        it('sets totalCount to response.totalCount', function(){
            model.parse({ totalCount: 5 });
            model.totalCount.should.equal(5);
        });
    });

    describe('url', function(){
        it('returns "api/parent/:parentId/children"', function(){
           model.url().should.equal('api/parent/5/children');
        });
    });
});