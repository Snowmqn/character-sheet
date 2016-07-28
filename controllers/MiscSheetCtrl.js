var Misc = require('../models/Misc');

module.exports = {
    
    create: function(req, res, next) {
        var newMisc = new Misc(req.body);
        newMisc.save(function(err, result) {
            if(err) return res.status(500).send(err);
            req.body.miscId = result._id;
            next();
        });
    },

    read: function(req, res) {
        Misc.find(req.query)
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        console.log("Reached this point");
        Misc.findByIdAndUpdate(req.params.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    delete: function(req, res) {
        Misc.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};