var SpellList= require('../models/SpellList');

module.exports = {
    
    create: function(req, res) {
        var newSpellList = new SpellList(req.body);
        newSpellList.save(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    read: function(req, res) {
        SpellList.find(req.query)
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        SpellList.findByIdAndUpdate(req.params.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    delete: function(req, res) {
        SpellList.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};