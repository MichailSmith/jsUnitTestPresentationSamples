var moment = require('moment');

module.exports = function(date){
    if(!date){
        return date;
    }
    return moment(date, 'M/D/YYYY HH:mm:ss').format('M/D/YYYY');
};