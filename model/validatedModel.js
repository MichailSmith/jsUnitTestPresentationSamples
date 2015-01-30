var _ = require('underscore'),
	Backbone = require('backbone'),
	Validation = require('backbone.validation');

_.extend(Backbone.Model.prototype, Validation.mixin);

module.exports = Backbone.Model.extend({
	validation: {
		name: {
			required: true
		}
	}
});