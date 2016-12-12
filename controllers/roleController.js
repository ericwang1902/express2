var roleModel = require('../models/roleModel.js');

/**
 * roleController.js
 *
 * @description :: Server-side logic for managing roles.
 */
module.exports = {

    /**
     * roleController.list()
     */
    list: function (req, res) {
        roleModel.find(function (err, roles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting role.',
                    error: err
                });
            }
            return res.json(roles);
        });
    },

    /**
     * roleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        roleModel.findOne({_id: id}, function (err, role) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting role.',
                    error: err
                });
            }
            if (!role) {
                return res.status(404).json({
                    message: 'No such role'
                });
            }
            return res.json(role);
        });
    },

    /**
     * roleController.create()
     */
    create: function (req, res) {
        var role = new roleModel({			code : req.body.code,			name : req.body.name,			description : req.body.description,			authArray : req.body.authArray
        });

        role.save(function (err, role) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating role',
                    error: err
                });
            }
            return res.status(201).json(role);
        });
    },

    /**
     * roleController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        roleModel.findOne({_id: id}, function (err, role) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting role',
                    error: err
                });
            }
            if (!role) {
                return res.status(404).json({
                    message: 'No such role'
                });
            }

            role.code = req.body.code ? req.body.code : role.code;			role.name = req.body.name ? req.body.name : role.name;			role.description = req.body.description ? req.body.description : role.description;			role.authArray = req.body.authArray ? req.body.authArray : role.authArray;			
            role.save(function (err, role) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating role.',
                        error: err
                    });
                }

                return res.json(role);
            });
        });
    },

    /**
     * roleController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        roleModel.findByIdAndRemove(id, function (err, role) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the role.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
