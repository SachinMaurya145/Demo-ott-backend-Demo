const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  title: String,
  body: String,
  hashtags: [String],
  attachments: [String], // URLs or base64 strings
  anonymous: { type: Boolean, default: false },
  category: String, // Comedy, Action, Netflix, etc.
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  replies: [
    {
      body: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  reported: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Discussion", discussionSchema);
