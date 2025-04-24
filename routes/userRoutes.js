const express = require("express");
const router = express.Router();
const { getProfile, updatePreferences } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getProfile);
router.put("/preferences", protect, updatePreferences);

module.exports = router;
