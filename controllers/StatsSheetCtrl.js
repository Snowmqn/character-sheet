var Stats= require('../models/Stats');

module.exports = {
    
    create: function(req, res, next) {
        var newStats = new Stats(req.body);
        newStats.save(function(err, result) {
            if(err) return res.status(500).send(err);
            req.body.statsId = result._id;
            next();
        });
    },

    read: function(req, res) {
        Stats.find(req.query)
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        Stats.findByIdAndUpdate(req.params.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    // addWeapon = function(req, res) {
    //     var blankWeapon = {
    //         name: 'name',
    //         attackBonus: -1,
    //         damage: '0d8',
    //         damageType: 'none',
    //         other: 'blank',
    //     };
    //     Stats.findByIdAndUpdate(req.params._id,
    //     {$push: {weapons: blankWeapon}})
    //     .exec(function(err, result) {
    //         if(err) return res.status(500).send(err);
    //         res.send(blankWeapon);
    //     });
    // },

    delete: function(req, res) {
        Stats.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};