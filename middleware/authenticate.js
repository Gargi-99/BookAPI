const authenticate = (req, res, next) => {
    const userId = req.headers["x-user-id"];
    const role = req.headers["x-role"];
    if (!userId || !role) {
      return res.status(400).json({ message: "Missing authentication details" });
    }
    req.user = { userId, role };
    next();
  };
  
  module.exports = authenticate;
  