const User = require("../models/User");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).populate("likedContent watchlist");
  res.json(user);
};

exports.updatePreferences = async (req, res) => {
  const { preferences } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { preferences }, { new: true });
  res.json(user);
};
