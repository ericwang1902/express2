var usertoorgModel = require('../models/usertoorgModel.js');

/**
 * usertoorgController.js
 *
 * @description :: Server-side logic for managing usertoorgs.
 */
module.exports = {

    /**
     * usertoorgController.list()
     */
    list: function (req, res) {
        usertoorgModel.find(function (err, usertoorgs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usertoorg.',
                    error: err
                });
            }
            return res.json(usertoorgs);
        });
    },

    /**
     * usertoorgController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        usertoorgModel.findOne({_id: id}, function (err, usertoorg) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usertoorg.',
                    error: err
                });
            }
            if (!usertoorg) {
                return res.status(404).json({
                    message: 'No such usertoorg'
                });
            }
            return res.json(usertoorg);
        });
    },

    /**
     * usertoorgController.create()
     */
    create: function (req, res) {
        var usertoorg = new usertoorgModel({			userid : req.body.userid,			orgid : req.body.orgid
        });

        usertoorg.save(function (err, usertoorg) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating usertoorg',
                    error: err
                });
            }
            return res.status(201).json(usertoorg);
        });
    },

    /**
     * usertoorgController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        usertoorgModel.findOne({_id: id}, function (err, usertoorg) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usertoorg',
                    error: err
                });
            }
            if (!usertoorg) {
                return res.status(404).json({
                    message: 'No such usertoorg'
                });
            }

            usertoorg.userid = req.body.userid ? req.body.userid : usertoorg.userid;			usertoorg.orgid = req.body.orgid ? req.body.orgid : usertoorg.orgid;			
            usertoorg.save(function (err, usertoorg) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating usertoorg.',
                        error: err
                    });
                }

                return res.json(usertoorg);
            });
        });
    },

    /**
     * usertoorgController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        usertoorgModel.findByIdAndRemove(id, function (err, usertoorg) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the usertoorg.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
