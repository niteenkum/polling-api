const express = require('express');
const router = express.Router();

const optionController = require('../controllers/optionController');


/* This is a post request that is being sent to the server. The `:id` is a parameter that is being
passed in. The `optionController.add_vote` is the function that is being called. */
router.post('/:id/add_vote', optionController.add_vote);

/* Deleting the option with the id of the option that is passed in. */
router.delete("/:id/delete", optionController.delete);

module.exports = router;