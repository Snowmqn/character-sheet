var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statsSchema = Schema({
    test: String
});

module.exports = mongoose.model('Stats', statsSchema);