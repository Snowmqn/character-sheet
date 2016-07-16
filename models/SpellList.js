var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spellListSchema = Schema({
    test: String
});

module.exports = mongoose.model('SpellList', spellListSchema);