const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2, // Added validation for title length
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 2, // Added validation for author name length
  },
  publishedDate: {
    type: Date, // Optional: Book's publication date
    validate: {
      validator: (value) => value < new Date(),
      message: "Published date cannot be in the future.",
    },
  },
  pages: {
    type: Number, // Optional: Number of pages
    min: 1, // Ensures at least one page
  },
  genre: {
    type: String, // Optional: Book's genre
    trim: true,
    maxlength: 50, // Restricts genre length to 50 characters
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
});

// Export the model
module.exports = mongoose.model("Book", bookSchema);
