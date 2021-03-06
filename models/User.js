var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    creationDate: {type: Date, default: Date.now},
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character'}]
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);

