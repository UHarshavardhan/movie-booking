const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
      genre: {
    type: String

  },
 
});

module.exports = mongoose.model('genres', genreSchema);
