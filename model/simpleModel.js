var backbone = require('backbone');

module.exports = backbone.Model.extend({
    urlRoot: 'api/simple',
    validate: function(attributes){
        if(!attributes.requiredProperty){
            return 'requiredProperty is required';
        }
    }
});