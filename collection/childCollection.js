var backbone = require('backbone');

module.exports = backbone.Collection.extend({
    parse: function(response){
        this.totalCount = response.totalCount;
        return response.data;
    }
});