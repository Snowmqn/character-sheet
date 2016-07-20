var Character = require('../models/Character');

module.exports = {
    
    create: function(req, res) {
        var newCharacter = new Character(req.body);
        newCharacter.save(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    read: function(req, res) {
        Character.find(req.query)
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        console.log("Reached this point");
        Character.findByIdAndUpdate(req.params.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    delete: function(req, res) {
        Character.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};