const express = require('express');
const router = express.Router();

const optionController = require('../controllers/optionController');


router.post('/:id/add_vote', optionController.add_vote);

router.delete("/:id/delete", optionController.delete);

module.exports = router;