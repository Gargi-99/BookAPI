const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,             // Limit each user to 10 requests per minute
  message: "Too many requests from this IP, please try again later.",
  keyGenerator: (req) => req.headers['x-user-id'], // Unique key per user
});

module.exports = rateLimiter;
