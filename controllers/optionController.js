const options = require('../models/option');

/* This is a function that is being exported from the file which give access to add vote to a particular option in the database. */
module.exports.add_vote = function(req, res){
    const id = req.params.id;
    options.findById(id, function(err, option){
        if(err){
        return res.status(400).json({
            message: "Option not found."
        });
        }
        option.votes += 1;
        option.save();
        return res.status(200).json({
        message: `Vote added for option ${option.option}`
        });
    });
}

/* This is a function that is being exported from the file which give access to delete an particular option from the database. */
module.exports.delete = function(req, res){
    const id = req.params.id;
    options.findById(id, function(err, option){

        if(err){
            return res.status(400).json({
                message: "Option not found."
            });
            }

        if(option) {
            if(option.votes > 0){
                return res.status(400).json({
                    message: "Option has votes. Cannot delete."
                });
            }
        }

        options.findByIdAndDelete(id, function(err){
            if(err){
                return res.status(400).json({
                    message: "Error in deleting option."
                });
            }
            return res.status(200).json({
                message: "Option deleted successfully."
            });
        });
    });
}