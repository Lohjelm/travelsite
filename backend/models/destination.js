const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  image: String,
  basePrice: { type: Number, required: true }, // Ensure basePrice is a number
});

module.exports = mongoose.model('Destination', destinationSchema);
