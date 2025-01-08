const express = require("express");
const router = express.Router();
const { 
  getBooks, 
  createBook, 
  updateBook, 
  deleteBook 
} = require("../controllers/booksController");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const rateLimiter = require("../config/rateLimiter");

// Routes for fetching books (accessible to authenticated users)
router.get("/books", rateLimiter, authenticate, getBooks);

// Routes restricted to Admin users
router.post("/books", rateLimiter, authenticate, authorize(["Admin"]), createBook);
router.put("/books/:id", rateLimiter, authenticate, authorize(["Admin"]), updateBook);
router.delete("/books/:id", rateLimiter, authenticate, authorize(["Admin"]), deleteBook);

module.exports = router;
