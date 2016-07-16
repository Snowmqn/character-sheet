var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var miscSchema = Schema({
    test: String
});

module.exports = mongoose.model('Misc', miscSchema);