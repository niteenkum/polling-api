const express = require('express');
const router = express.Router();
/* Importing the questionController.js file. */
const questionController = require('../controllers/questionController');

/* This is a route that is used to get a question by its id. */
router.get('/:id', questionController.question);

/* Creating a new question. */
router.post('/create', questionController.create);
 
/* This is a route that is used to create a new option for a question. */
router.post('/:id/options/create', questionController.createOption);

/* This is a route that is used to delete a question. */
router.delete('/:id/delete', questionController.delete);

module.exports = router;