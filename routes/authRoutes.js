const express = require('express');
const router = express.Router();

// POST /api/auth/send-otp
router.post('/send-otp', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  // Simulate OTP sending logic
  const otp = Math.floor(100000 + Math.random() * 900000); // random 6-digit OTP
  console.log(`OTP for ${email}: ${otp}`); // In production, send via email/SMS

  // OTP appears first in the response
  res.status(200).json({
    otp,
    message: 'OTP sent successfully'
  });
});

module.exports = router;
