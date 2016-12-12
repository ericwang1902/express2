var express = require('express');
var router = express.Router();
var usertoorgController = require('../controllers/usertoorgController.js');

/*
 * GET
 */
router.get('/', usertoorgController.list);

/*
 * GET
 */
router.get('/:id', usertoorgController.show);

/*
 * POST
 */
router.post('/', usertoorgController.create);

/*
 * PUT
 */
router.put('/:id', usertoorgController.update);

/*
 * DELETE
 */
router.delete('/:id', usertoorgController.remove);

module.exports = router;
