var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spellListSchema = Schema({
    spellAbility: String,
    saveDC: Number,
    spellAttackBonus: Number,
    cantrips: {
        spellsKnown: [{name: String}]
    },
    spellLevel:[{
        spellcastingClass: String,
        level: Number,
        slotsTotal: Number,
        slotsRemaining: Number,
        spellsKnown: [{
            name: String,
            prepared: Boolean,
        }]
    }]
});

module.exports = mongoose.model('SpellList', spellListSchema);