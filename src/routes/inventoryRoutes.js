const express = require('express');
const router = express.Router();

const controller = require('../controllers/inventoryController');

router.get('/:user_id', controller.getUserInventory);

module.exports = router;