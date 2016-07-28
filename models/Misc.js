var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var miscSchema = Schema({
    age: Number,
    height: Number,
    weight: Number,
    eyeColor: String,
    skin: String,
    hair: String,
    appearance: String,
    alliesOrganizations: String,
    treasure: String,
    backstory: String,
    Other: [{
        heading: String,
        content: String
    }]
});

module.exports = mongoose.model('Misc', miscSchema);