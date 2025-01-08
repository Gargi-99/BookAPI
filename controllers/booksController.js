const redisClient = require("../config/redis");
const Book = require("../models/book"); // Assuming you have a Book model connected to MongoDB

// Caching middleware for GET /books
const getBooks = (req, res) => {
  redisClient.get("books", async (err, data) => {
    if (data) {
      return res.json(JSON.parse(data)); // Return cached books
    }
    // If cache is not available, fetch books from the DB
    try {
      const books = await Book.find(); // Get all books from the database
      redisClient.setex("books", 60, JSON.stringify(books)); // Cache books for 60 seconds
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, publishedDate, pages, genre } = req.body;

  try {
    // Create a new book and save it to the database
    const newBook = new Book({
      title,
      author,
      publishedDate,
      pages,
      genre,
    });

    const savedBook = await newBook.save(); // Save the book to MongoDB

    // Clear cache after adding a new book
    redisClient.del("books");

    res.status(201).json({
      message: "Book created successfully",
      book: savedBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const { title, author, publishedDate, pages, genre } = req.body;

  try {
    // Find the book by its ID and update it
    const book = await Book.findByIdAndUpdate(
      bookId,
      { title, author, publishedDate, pages, genre },
      { new: true } // Return the updated document
    );

    if (book) {
      // Clear cache after updating the book
      redisClient.del("books");
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  console.log(`Deleting book with ID: ${bookId}`);

  try {
    const book = await Book.findByIdAndDelete(bookId);

    if (book) {
      console.log('Book deleted successfully');
      redisClient.del("books");
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, createBook, updateBook, deleteBook };
