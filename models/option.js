const mongoose = require('mongoose');

const optionSchema = mongoose.Schema({
    option: {
        type: String,
        required: true,
        unique: true
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

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;