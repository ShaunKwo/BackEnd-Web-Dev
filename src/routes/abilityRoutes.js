const express = require('express');
const router = express.Router();
const controller=require('../controllers/abilityController');

router.get('/', controller.readAllAbilities);
router.post('/', controller.createNewAbility);
router.get('/:id', controller.readAbilityById);
router.put('/:id', controller.updateAbilityById);
router.delete('/:id', controller.deleteAbilityById);

module.exports = router;