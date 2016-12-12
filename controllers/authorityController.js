var authorityModel = require('../models/authorityModel.js');

/**
 * authorityController.js
 *
 * @description :: Server-side logic for managing authoritys.
 */
module.exports = {

    /**
     * authorityController.list()
     */
    list: function (req, res) {
        authorityModel.find(function (err, authoritys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting authority.',
                    error: err
                });
            }
            return res.json(authoritys);
        });
    },

    /**
     * authorityController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        authorityModel.findOne({_id: id}, function (err, authority) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting authority.',
                    error: err
                });
            }
            if (!authority) {
                return res.status(404).json({
                    message: 'No such authority'
                });
            }
            return res.json(authority);
        });
    },

    /**
     * authorityController.create()
     */
    create: function (req, res) {
        var authority = new authorityModel({			code : req.body.code,			name : req.body.name,			description : req.body.description
        });

        authority.save(function (err, authority) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating authority',
                    error: err
                });
            }
            return res.status(201).json(authority);
        });
    },

    /**
     * authorityController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        authorityModel.findOne({_id: id}, function (err, authority) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting authority',
                    error: err
                });
            }
            if (!authority) {
                return res.status(404).json({
                    message: 'No such authority'
                });
            }

            authority.code = req.body.code ? req.body.code : authority.code;			authority.name = req.body.name ? req.body.name : authority.name;			authority.description = req.body.description ? req.body.description : authority.description;			
            authority.save(function (err, authority) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating authority.',
                        error: err
                    });
                }

                return res.json(authority);
            });
        });
    },

    /**
     * authorityController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        authorityModel.findByIdAndRemove(id, function (err, authority) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the authority.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
