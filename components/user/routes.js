const express = require('express');
const router = express.Router();

const numericParam = require('../../utils/integerParam');
const controller = require('./controller');

router.param('id', numericParam('id'));

router.get('/:id', controller.get);
router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;
