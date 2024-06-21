const express = require('express');
const router = express.Router();

const controller = require('../controllers/questProgressController');

router.post('/:quest_id/user/:user_id', controller.checkUserAppearance, controller.checkIfQuestCompletedBefore, controller.getItemPlanetId, controller.createQuestProgress);
router.get('/:id', controller.readQuestProgressById);
router.put('/:id', controller.updateQuestProgressById);
router.delete('/:id', controller.deleteQuestProgressById);

router.get('/:user_id/userAbilities', controller.getUserPlanetsAbilities);

module.exports = router;