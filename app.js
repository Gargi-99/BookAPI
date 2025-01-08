const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const booksRoutes = require("./routes/booksRoutes");

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use("/api", booksRoutes); // Book-related routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
