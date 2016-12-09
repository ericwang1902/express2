var express = require('express');
var router = express.Router();
var orgtoregionController = require('../controllers/orgtoregionController.js');

/*
 * GET
 */
router.get('/', orgtoregionController.list);

/*
 * GET
 */
router.get('/:id', orgtoregionController.show);

/*
 * POST
 */
router.post('/', orgtoregionController.create);

/*
 * PUT
 */
router.put('/:id', orgtoregionController.update);

/*
 * DELETE
 */
router.delete('/:id', orgtoregionController.remove);

module.exports = router;
