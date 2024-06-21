const express = require('express');
const router = express.Router();

const controller = require('../controllers/coloniesController');

router.get('/', controller.readAllColonies);
router.post('/', controller.createNewColony);
router.get('/:id', controller.readColonyById);
router.put('/:id', controller.updateColonyById);
router.delete('/:id', controller.deleteColonyById);

module.exports = router;