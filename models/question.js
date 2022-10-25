const mongoose = require('mongoose');

/* This is creating a schema for the question model. */
const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});


/* Creating a model for the question schema. */
const Question = mongoose.model('Question', questionSchema);

/* Exporting the Question model. */
module.exports = Question;