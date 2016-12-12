var platorderModel = require('../models/platorderModel.js');

/**
 * platorderController.js
 *
 * @description :: Server-side logic for managing platorders.
 */
module.exports = {

    /**
     * platorderController.list()
     */
    list: function (req, res) {
        platorderModel.find(function (err, platorders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting platorder.',
                    error: err
                });
            }
            return res.json(platorders);
        });
    },

    /**
     * platorderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        platorderModel.findOne({_id: id}, function (err, platorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting platorder.',
                    error: err
                });
            }
            if (!platorder) {
                return res.status(404).json({
                    message: 'No such platorder'
                });
            }
            return res.json(platorder);
        });
    },

    /**
     * platorderController.create()
     */
    create: function (req, res) {
        var platorder = new platorderModel({			ordernum : req.body.ordernum,			ordertime : req.body.ordertime,			picktime : req.body.picktime,			updatetime : req.body.updatetime,			pickorg : req.body.pickorg,			picker : req.body.picker,			kdnorderid : req.body.kdnorderid,			trace : req.body.trace
        });

        platorder.save(function (err, platorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating platorder',
                    error: err
                });
            }
            return res.status(201).json(platorder);
        });
    },

    /**
     * platorderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        platorderModel.findOne({_id: id}, function (err, platorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting platorder',
                    error: err
                });
            }
            if (!platorder) {
                return res.status(404).json({
                    message: 'No such platorder'
                });
            }

            platorder.ordernum = req.body.ordernum ? req.body.ordernum : platorder.ordernum;			platorder.ordertime = req.body.ordertime ? req.body.ordertime : platorder.ordertime;			platorder.picktime = req.body.picktime ? req.body.picktime : platorder.picktime;			platorder.updatetime = req.body.updatetime ? req.body.updatetime : platorder.updatetime;			platorder.pickorg = req.body.pickorg ? req.body.pickorg : platorder.pickorg;			platorder.picker = req.body.picker ? req.body.picker : platorder.picker;			platorder.kdnorderid = req.body.kdnorderid ? req.body.kdnorderid : platorder.kdnorderid;			platorder.trace = req.body.trace ? req.body.trace : platorder.trace;			
            platorder.save(function (err, platorder) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating platorder.',
                        error: err
                    });
                }

                return res.json(platorder);
            });
        });
    },

    /**
     * platorderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        platorderModel.findByIdAndRemove(id, function (err, platorder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the platorder.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
