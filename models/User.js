const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: { type: String, unique: true },
  preferences: [String], // genres or interests
  photo: String,
  likedContent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
  otp: String, // temporary OTP field
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
