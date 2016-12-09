var orgtoregionModel = require('../models/orgtoregionModel.js');

/**
 * orgtoregionController.js
 *
 * @description :: Server-side logic for managing orgtoregions.
 */
module.exports = {

    /**
     * orgtoregionController.list()
     */
    list: function (req, res) {
        orgtoregionModel.find(function (err, orgtoregions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orgtoregion.',
                    error: err
                });
            }
            return res.json(orgtoregions);
        });
    },

    /**
     * orgtoregionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        orgtoregionModel.findOne({_id: id}, function (err, orgtoregion) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orgtoregion.',
                    error: err
                });
            }
            if (!orgtoregion) {
                return res.status(404).json({
                    message: 'No such orgtoregion'
                });
            }
            return res.json(orgtoregion);
        });
    },

    /**
     * orgtoregionController.create()
     */
    create: function (req, res) {
        var orgtoregion = new orgtoregionModel({			org : req.body.org,			region : req.body.region
        });

        orgtoregion.save(function (err, orgtoregion) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orgtoregion',
                    error: err
                });
            }
            return res.status(201).json(orgtoregion);
        });
    },

    /**
     * orgtoregionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        orgtoregionModel.findOne({_id: id}, function (err, orgtoregion) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orgtoregion',
                    error: err
                });
            }
            if (!orgtoregion) {
                return res.status(404).json({
                    message: 'No such orgtoregion'
                });
            }

            orgtoregion.org = req.body.org ? req.body.org : orgtoregion.org;			orgtoregion.region = req.body.region ? req.body.region : orgtoregion.region;			
            orgtoregion.save(function (err, orgtoregion) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orgtoregion.',
                        error: err
                    });
                }

                return res.json(orgtoregion);
            });
        });
    },

    /**
     * orgtoregionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        orgtoregionModel.findByIdAndRemove(id, function (err, orgtoregion) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orgtoregion.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
