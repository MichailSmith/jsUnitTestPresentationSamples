var should = require('should'),
    dateHelper = require('./dateHelper');

describe('dateHelper', function(){
    describe('with date parameter', function(){
        it('should return date component of parameter', function(){
            dateHelper('1-1-2015 10:00:00').should.equal('1/1/2015');
        })
    })
    describe('with not-truthy parameter', function(){
        it('should return not-truthy result', function(){
            should(dateHelper()).not.be.ok;
        })
    })
})