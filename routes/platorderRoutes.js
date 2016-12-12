var express = require('express');
var router = express.Router();
var platorderController = require('../controllers/platorderController.js');

/*
 * GET
 */
router.get('/', platorderController.list);

/*
 * GET
 */
router.get('/:id', platorderController.show);

/*
 * POST
 */
router.post('/', platorderController.create);

/*
 * PUT
 */
router.put('/:id', platorderController.update);

/*
 * DELETE
 */
router.delete('/:id', platorderController.remove);

module.exports = router;
