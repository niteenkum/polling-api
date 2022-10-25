const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionController');

console.log("Question router file initialized");

router.get('/:id', questionController.question);

router.post('/create', questionController.create);
 
router.post('/:id/options/create', questionController.createOption);

router.delete('/:id/delete', questionController.delete);

module.exports = router;