var traceModel = require('../models/traceModel.js');

/**
 * traceController.js
 *
 * @description :: Server-side logic for managing traces.
 */
module.exports = {

    /**
     * traceController.list()
     */
    list: function (req, res) {
        traceModel.find(function (err, traces) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trace.',
                    error: err
                });
            }
            return res.json(traces);
        });
    },

    /**
     * traceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        traceModel.findOne({_id: id}, function (err, trace) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trace.',
                    error: err
                });
            }
            if (!trace) {
                return res.status(404).json({
                    message: 'No such trace'
                });
            }
            return res.json(trace);
        });
    },

    /**
     * traceController.create()
     */
    create: function (req, res) {
        var trace = new traceModel({			accepttime : req.body.accepttime,			acceptstation : req.body.acceptstation,			description : req.body.description
        });

        trace.save(function (err, trace) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating trace',
                    error: err
                });
            }
            return res.status(201).json(trace);
        });
    },

    /**
     * traceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        traceModel.findOne({_id: id}, function (err, trace) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trace',
                    error: err
                });
            }
            if (!trace) {
                return res.status(404).json({
                    message: 'No such trace'
                });
            }

            trace.accepttime = req.body.accepttime ? req.body.accepttime : trace.accepttime;			trace.acceptstation = req.body.acceptstation ? req.body.acceptstation : trace.acceptstation;			trace.description = req.body.description ? req.body.description : trace.description;			
            trace.save(function (err, trace) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating trace.',
                        error: err
                    });
                }

                return res.json(trace);
            });
        });
    },

    /**
     * traceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        traceModel.findByIdAndRemove(id, function (err, trace) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the trace.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
