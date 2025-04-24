const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: [String],
  platform: String, // Netflix, Hulu, etc.
  thumbnail: String,
  videoUrl: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

module.exports = mongoose.model("Content", contentSchema);
