var orgModel = require('../models/orgModel.js');

/**
 * orgController.js
 *
 * @description :: Server-side logic for managing orgs.
 */
module.exports = {

    /**
     * orgController.list()
     */
    list: function (req, res) {
        orgModel.find(function (err, orgs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting org.',
                    error: err
                });
            }
            return res.json(orgs);
        });
    },

    /**
     * orgController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        orgModel.findOne({_id: id}, function (err, org) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting org.',
                    error: err
                });
            }
            if (!org) {
                return res.status(404).json({
                    message: 'No such org'
                });
            }
            return res.json(org);
        });
    },

    /**
     * orgController.create()
     */
    create: function (req, res) {
        var org = new orgModel({
			orgname : req.body.orgname,
            description:req.body.description,
            address:req.body.address,
			orgcompany : req.body.orgcompany,
			orgaccount : req.body.orgaccount,
			orgpsd : req.body.orgpsd
        });

        org.save(function (err, org) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating org',
                    error: err
                });
            }
            return res.status(201).json(org);
        });
    },

    /**
     * orgController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        orgModel.findOne({_id: id}, function (err, org) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting org',
                    error: err
                });
            }
            if (!org) {
                return res.status(404).json({
                    message: 'No such org'
                });
            }

            org.orgname = req.body.orgname ? req.body.orgname : org.orgname;
            org.description = req.body.description ? req.body.description : org.description;
            org.address = req.body.address ? req.body.address : org.address;
			org.orgcompany = req.body.orgcompany ? req.body.orgcompany : org.orgcompany;
			org.orgaccount = req.body.orgaccount ? req.body.orgaccount : org.orgaccount;
			org.orgpsd = req.body.orgpsd ? req.body.orgpsd : org.orgpsd;

			
            org.save(function (err, org) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating org.',
                        error: err
                    });
                }

                return res.json(org);
            });
        });
    },

    /**
     * orgController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        orgModel.findByIdAndRemove(id, function (err, org) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the org.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
