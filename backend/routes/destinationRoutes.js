const express = require('express');
const Destination = require('../models/Destination'); // Import destination model
const router = express.Router();

// GET all destinations or filtered destinations
router.get('/', async (req, res) => {
  try {
    console.log('Query Parameters:', req.query); // Log query parameters to help with debugging
    const { location, maxPrice } = req.query;

    // Build filter object based on query parameters
    const filter = {};
    if (location) {
      filter.location = new RegExp(location, 'i'); // Case-insensitive search
    }
    if (maxPrice) {
      filter.basePrice = { $lte: Number(maxPrice) }; // Max price filter
    }

    // Fetch destinations from the database based on the filter
    const destinations = await Destination.find(filter);
    res.json(destinations); // Return the filtered list of destinations
  } catch (err) {
    console.error('Error fetching destinations:', err); // Log the error
    res.status(500).json({ message: 'Error fetching destinations' }); // Send error message
  }
});

module.exports = router;
