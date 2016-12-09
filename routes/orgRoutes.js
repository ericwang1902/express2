var express = require('express');
var router = express.Router();
var orgController = require('../controllers/orgController.js');

/*
 * GET
 */
router.get('/', orgController.list);

/*
 * GET
 */
router.get('/:id', orgController.show);

/*
 * POST
 */
router.post('/', orgController.create);

/*
 * PUT
 */
router.put('/:id', orgController.update);

/*
 * DELETE
 */
router.delete('/:id', orgController.remove);

module.exports = router;
