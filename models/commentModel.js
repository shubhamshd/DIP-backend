const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  idea_no: {
    type: Number,
    required: true
  },
  likes:{
    type: Number
  },
  comments:[{
    username: {
      type: String,
      required: true
    },
    comment:{
      type: String,
      required: true
    }
 }],
  date: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;