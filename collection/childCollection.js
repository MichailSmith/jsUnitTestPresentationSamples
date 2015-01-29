var backbone = require('backbone');

module.exports = backbone.Collection.extend({
    parse: function(response){
        this.totalCount = response.totalCount;
        return response.data;
    },
    initialize: function(options){
        options = options || {};
        this.parentId = options.parentId;
    },
    url: function(){
        return 'api/parent/' + this.parentId + '/children';
    }
});