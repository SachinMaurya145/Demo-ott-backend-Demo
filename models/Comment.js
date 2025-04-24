const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  contentRef: { type: mongoose.Schema.Types.ObjectId, ref: "Content" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
