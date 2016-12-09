var regionModel = require('../models/regionModel.js');

/**
 * regionController.js
 *
 * @description :: Server-side logic for managing regions.
 */
module.exports = {

    /**
     * regionController.list()
     */
    list: function (req, res) {
        regionModel.find(function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region.',
                    error: err
                });
            }
            return res.json(regions);
        });
    },

    /**
     * regionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        regionModel.findOne({_id: id}, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region.',
                    error: err
                });
            }
            if (!region) {
                return res.status(404).json({
                    message: 'No such region'
                });
            }
            return res.json(region);
        });
    },

    /**
     * regionController.create()
     */
    create: function (req, res) {
        var region = new regionModel({			code : req.body.code,			province : req.body.province,			city : req.body.city,			county : req.body.county,			district : req.body.district
        });

        region.save(function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating region',
                    error: err
                });
            }
            return res.status(201).json(region);
        });
    },

    /**
     * regionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        regionModel.findOne({_id: id}, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region',
                    error: err
                });
            }
            if (!region) {
                return res.status(404).json({
                    message: 'No such region'
                });
            }

            region.code = req.body.code ? req.body.code : region.code;			region.province = req.body.province ? req.body.province : region.province;			region.city = req.body.city ? req.body.city : region.city;			region.county = req.body.county ? req.body.county : region.county;			region.district = req.body.district ? req.body.district : region.district;			
            region.save(function (err, region) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating region.',
                        error: err
                    });
                }

                return res.json(region);
            });
        });
    },

    /**
     * regionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        regionModel.findByIdAndRemove(id, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the region.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
