var addressModel = require('../models/addressModel.js');

/**
 * addressController.js
 *
 * @description :: Server-side logic for managing addresss.
 */
module.exports = {

    /**
     * addressController.list()
     */
    list: function (req, res) {
        addressModel.find(function (err, addresss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address.',
                    error: err
                });
            }
            return res.json(addresss);
        });
    },

    /**
     * addressController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        addressModel.findOne({_id: id}, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address.',
                    error: err
                });
            }
            if (!address) {
                return res.status(404).json({
                    message: 'No such address'
                });
            }
            return res.json(address);
        });
    },

    /**
     * addressController.create()
     */
    create: function (req, res) {
        var address = new addressModel({
			region : req.body.region,
			detailAdd : req.body.detailAdd,
			phone : req.body.phone,
            name:req.body.name
        });

        address.save(function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating address',
                    error: err
                });
            }
            return res.status(201).json(address);
        });
    },

    /**
     * addressController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        addressModel.findOne({_id: id}, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address',
                    error: err
                });
            }
            if (!address) {
                return res.status(404).json({
                    message: 'No such address'
                });
            }

            address.region = req.body.region ? req.body.region : address.region;
			address.detailAdd = req.body.detailAdd ? req.body.detailAdd : address.detailAdd;
			address.phone = req.body.phone ? req.body.phone : address.phone;
			address.name = req.body.name ? req.body.phone : address.name;

            address.save(function (err, address) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating address.',
                        error: err
                    });
                }

                return res.json(address);
            });
        });
    },

    /**
     * addressController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        addressModel.findByIdAndRemove(id, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the address.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    //根据参数查找

};
