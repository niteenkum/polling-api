const mongoose = require('mongoose');

/* Creating a schema for the options collection. */
const optionSchema = mongoose.Schema({
    option: {
        type: String,
        required: true,
    },  
    votes: {
        type: Number,
        default: 0
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
}, {
    timestamps: true
});

/* Creating a model for the option collection. */
const Option = mongoose.model('Option', optionSchema);

/* Exporting the model to be used in other files. */

module.exports = Option;