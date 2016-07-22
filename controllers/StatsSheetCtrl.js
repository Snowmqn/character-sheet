var Stats= require('../models/Stats');

module.exports = {
    
    create: function(req, res, next) {
        var newStats = new Stats(req.body);
        newStats.save(function(err, result) {
            if(err) return res.status(500).send(err);
            req.body.statsId = result._id;
                        console.log("before Next:", req.body);

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

    delete: function(req, res) {
        Stats.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};