const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: String,
  director: String,
  year: Number,
  genre: String,
  image: String,
  video: String
}, {
  timestamps: true 
});

module.exports = mongoose.model('Movie', MovieSchema);