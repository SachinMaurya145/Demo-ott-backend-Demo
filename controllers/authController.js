const User = require("../models/User");
const { generateOTP } = require("../utils/otpGenerator");

// Mock OTP verification and sign-up
exports.sendOTP = async (req, res) => {
  const { phone } = req.body;
  const otp = generateOTP();
  // Save otp in DB or use Redis for expiry-based storage
  await User.findOneAndUpdate({ phone }, { otp }, { upsert: true, new: true });
  res.json({ message: "OTP sent", otp });
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;
  const user = await User.findOne({ phone });
  if (user?.otp === otp) {
    user.otp = null;
    await user.save();
    res.json({ message: "Logged in", user });
  } else {
    res.status(401).json({ error: "Invalid OTP" });
  }
};
