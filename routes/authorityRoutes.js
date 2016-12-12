var express = require('express');
var router = express.Router();
var authorityController = require('../controllers/authorityController.js');

/*
 * GET
 */
router.get('/', authorityController.list);

/*
 * GET
 */
router.get('/:id', authorityController.show);

/*
 * POST
 */
router.post('/', authorityController.create);

/*
 * PUT
 */
router.put('/:id', authorityController.update);

/*
 * DELETE
 */
router.delete('/:id', authorityController.remove);

module.exports = router;
