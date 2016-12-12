var kdnorderModel = require('../models/kdnorderModel.js');

/**
 * kdnorderController.js
 *
 * @description :: Server-side logic for managing kdnorders.
 */
module.exports = {

    /**
     * kdnorderController.list()
     */
    list: function (req, res) {
        kdnorderModel.find(function (err, kdnorders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kdnorder.',
                    error: err
                });
            }
            return res.json(kdnorders);
        });
    },

    /**
     * kdnorderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        kdnorderModel.findOne({_id: id}, function (err, kdnorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kdnorder.',
                    error: err
                });
            }
            if (!kdnorder) {
                return res.status(404).json({
                    message: 'No such kdnorder'
                });
            }
            return res.json(kdnorder);
        });
    },

    /**
     * kdnorderController.create()
     */
    create: function (req, res) {
        var kdnorder = new kdnorderModel({
        });

        kdnorder.save(function (err, kdnorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating kdnorder',
                    error: err
                });
            }
            return res.status(201).json(kdnorder);
        });
    },

    /**
     * kdnorderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        kdnorderModel.findOne({_id: id}, function (err, kdnorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kdnorder',
                    error: err
                });
            }
            if (!kdnorder) {
                return res.status(404).json({
                    message: 'No such kdnorder'
                });
            }

            kdnorder.ordernum = req.body.ordernum ? req.body.ordernum : kdnorder.ordernum;
            kdnorder.save(function (err, kdnorder) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating kdnorder.',
                        error: err
                    });
                }

                return res.json(kdnorder);
            });
        });
    },

    /**
     * kdnorderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        kdnorderModel.findByIdAndRemove(id, function (err, kdnorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the kdnorder.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};