const express = require("express");
const router = express.Router();

/* Using the router to create a route for the questions and options. */
router.use("/questions", require("./question"));
router.use("/options", require("./option"));

module.exports = router;
