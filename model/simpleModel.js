module.exports = {
    urlRoot: 'api/simple',
    url: function(options){
        options = options || {};
        if(options.id){
            return this.urlRoot + '/' + options.id;
        }
        return this.urlRoot;
    }
}