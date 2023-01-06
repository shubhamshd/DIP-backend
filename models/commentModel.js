const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  idea_no: {
    type: Number,
    required: true
  },
  user_email:{
    type: String,
  },
  comment:{
      type: String
    },
  date: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;