var ChildCollection = require('./childCollection');

require('should');

describe('ChildCollection', function(){
    var model = new ChildCollection();
    describe('parse', function(){
        it('returns response.data', function(){
            model.parse({data:'sample data'}).should.equal('sample data');
        });
        it('sets totalCount to response.totalCount', function(){
            model.parse({totalCount: 5});
            model.totalCount.should.equal(5);
        });
    });
});