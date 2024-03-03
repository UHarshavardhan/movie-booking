const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieid: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  released: {
    type: Boolean,
    default: false
  },
  poster_url: {
    type: String
  },
  release_date: {
    type: Date
  },
  publish_date: {
    type: Date
  },
  artists: [{
    artistid: {
      type: Number,
      required: true
    },
    first_name: String,
    last_name: String,
    wiki_url: String,
    profile_url: String,
    movies: [Number]
  }],
  genres: [String],
  duration: {
    type: Number,
    required: true
  },
  critic_rating: Number,
  trailer_url: String,
  wiki_url: String,
  story_line: String
});

module.exports = mongoose.model('Movie', movieSchema);

