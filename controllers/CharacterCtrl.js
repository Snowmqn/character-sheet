var Character = require('../models/Character');

module.exports = {
    
    create: function(req, res, next) {
        var charObj = {
            stats: req.body.statsId,
            spell: req.body.spellId,
            misc:  req.body.miscId,
            name:  req.body.name,
            level: req.body.level
        }
        var newCharacter = new Character(charObj);
        newCharacter.save(function(err, result) {
            if(err) return res.status(500).send(err);
            req.body.charId = result._id;
            next();
        });
    },

    read: function(req, res) {
        Character.find(req.query)
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    getCharacter: function(req, res) {
        Character.findById(req.params.id)
        .populate('stats misc spells')
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        Character.findByIdAndUpdate(req.params.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    delete: function(req, res, next) {
        Character.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            next();
        });
    }
};