// Dummy token-based authentication
exports.protect = (req, res, next) => {
    // Simulated user injection (replace with JWT logic)
    req.user = { id: "USER_ID" };
    next();
  };
  