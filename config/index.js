var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname 
        + ':' + configValues.pwd
        + '@cluster0.ntuqn.mongodb.net/coding-maths?retryWrites=true&w=majority?retryWrites=true&w=majority'; 
    }


}