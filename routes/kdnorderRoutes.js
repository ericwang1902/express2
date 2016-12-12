var express = require('express');
var router = express.Router();
var kdnorderController = require('../controllers/kdnorderController.js');

/*
 * GET
 */
router.get('/', kdnorderController.list);

/*
 * GET
 */
router.get('/:id', kdnorderController.show);

/*
 * POST
 */
router.post('/', kdnorderController.create);

/*
 * PUT
 */
router.put('/:id', kdnorderController.update);

/*
 * DELETE
 */
router.delete('/:id', kdnorderController.remove);

module.exports = router;
