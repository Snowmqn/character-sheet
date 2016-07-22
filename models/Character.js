var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = Schema({
    name: String,
    level: Number,
    stats: { type: mongoose.Schema.Types.ObjectId, ref: 'Stats'},
    spell: { type: mongoose.Schema.Types.ObjectId, ref: 'Spell'},
    misc: { type: mongoose.Schema.Types.ObjectId, ref: 'Misc'}
});

module.exports = mongoose.model('Character', CharacterSchema);