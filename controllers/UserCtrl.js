var User= require('../models/User');

module.exports = {
    
    create: function(req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    createCharacter: function(req,res,next) {
        User.findByIdAndUpdate(req.user._id,
        {$push: {characters: req.body.charId}})
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            next();
        });     
    },

    read: function(req, res) {
        User.find(req.query)
        .populate('characters')
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    },

    getUser: function(req, res) {
        User.findById(req.user._id)
        .populate('characters')
        .exec(function(err, result) {
            if(err) return res.status(500).send(err);
            result.password = '';
            req.user = result;
            res.send(result);
        });
    },

    update: function(req, res) {
        User.findByIdAndUpdate(req.user.id, req.body,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
        
    },

    delete: function(req, res) {
        User.findByIdAndRemove(req.params.id,
        function(err, result) {
            if(err) return res.status(500).send(err);
            res.send(result);
        });
    }
};