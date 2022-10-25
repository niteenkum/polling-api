const express = require("express");
const router = express.Router();

console.log("router file initialized")
 
 router.use('/questions', require('./question'));
    router.use('/options', require('./option'));
 
module.exports = router;