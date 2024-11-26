const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const destinationRoutes = require('./routes/destinationRoutes'); // Import the destination routes

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Verify that MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env');
  process.exit(1); // Exit the application if MONGO_URI is not set
}

// Connect to MongoDB using the URI from .env
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the application on failure
  });

// Routes
app.use('/api/destinations', destinationRoutes); // Use destination routes

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error('Unexpected server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
