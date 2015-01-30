var should = require('should'),
	Model = require('./validatedModel');

describe('validated model', function() {
	var model;

	beforeEach(function() {
		model = new Model();
	});

	describe('name', function() {
		it('should fail when undefined', function() {
			return model.isValid('name').should.not.be.ok;
		});

		it('should be valid when defined', function() {
			model.set('name', 'bobby');

			return model.isValid('name').should.be.ok;
		});
	});
});