var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = Schema({
    test: String
});

module.exports = mongoose.model('Character', CharacterSchema);