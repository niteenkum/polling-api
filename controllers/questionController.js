const question = require('../models/question');
const option = require('../models/option');

/* A function that is being exported from the controller to view question and there all the options available in the database. */
module.exports.question = function(req, res){
  const id = req.params.id;
  question.findById(id, function(err, ques){
    if(err){
      return res.status(400).json({
        message: "Question not found."
      });
    }
    option.find({questionId: id}, function(err, options){
      if(err){
        return res.status(400).json({
          message: "Error in finding options."
        });
      }

      let allOptions = [];
      for(let opt of options){
        allOptions.push({
          id: opt._id,
          option: opt.option,
          votes: opt.votes,
          link_to_vote: `http://localhost:8000/options/${opt._id}/add_vote`
        });
      }

      let question = {
        id: ques._id,
        question: ques.question,
        options: allOptions,
      }
      return res.status(200).json({
        question: question,
      });
    });
  });
}

/* Creating a question. */

module.exports.create = function(req, res){
  console.log("jbdjdjhhjshj", req.body)
  // return res.end("<h1>okay</h1>")
  try{
    for(let ques of req.body.content){
      question.create({
        question: ques
      });
    }
    return res.status(200).json(
      {message: "Question created successfully"}
      );
  }
  catch(err){
    return res.status(400).json({
      message: "error in creating a question" + err
    });
  }

} 

/* A function that is being exported from the controller and which is used to create a option if the question exists. */
module.exports.createOption = function(req, res){
  const id = req.params.id;
  console.log(req.body, id);

  question.findById(id, function(err, ques){
    if(err){
      return res.status(400).json({
        message: "Question not found."
      });
    }

    console.log("Question found", ques);
    for(let opt of req.body.content){
      option.create({
        option: opt,
        questionId: id
      });
    }

    return res.status(200).json({
      message: `Option created for question ${ques.question}`
    });
  });
}



/* A function that is being exported from the controller and which is used to delete a question if the
question exists and if none of the options contains votes. */
module.exports.delete = function(req, res){
  const id = req.params.id;
  option.find({questionId: id},function(err, options) {
    if(options){
      for(let opt of options){
        if(opt.votes > 0){
          return res.status(400).json({
            message: "Option has votes. Cannot delete."
          });
        }
      }
    }

    question.findByIdAndDelete(id, function(err){
      if(err){
        return res.status(400).json({
          message: "Question not found."
        });
      }
      return res.status(200).json({
        message: "Question deleted successfully."
      });
    });
  })
}