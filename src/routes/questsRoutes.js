const express = require('express');
const router = express.Router();

const controller = require('../controllers/questsController');

router.get('/', controller.readAllQuests);
router.post('/', controller.createNewQuest);
router.get('/:id', controller.readQuestById);
router.put('/:id', controller.updateQuestById);
router.delete('/:id', controller.deleteQuestById);

module.exports = router;