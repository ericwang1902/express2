var express = require('express');
var router = express.Router();
var traceController = require('../controllers/traceController.js');

/*
 * GET
 */
router.get('/', traceController.list);

/*
 * GET
 */
router.get('/:id', traceController.show);

/*
 * POST
 */
router.post('/', traceController.create);

/*
 * PUT
 */
router.put('/:id', traceController.update);

/*
 * DELETE
 */
router.delete('/:id', traceController.remove);

module.exports = router;
