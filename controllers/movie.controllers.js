const db = require('../models');
const Movie = db.Movie;
const show=db.show;
 


exports.findAllMovies = (req, res) => {
  const status = req.query.status; 

  Movie.find({ status: status })
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving movies."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.movieId;

  Movie.findById(id)
    .then(movie => {
      if (!movie) {
        return res.status(404).json({ message: "Movie not found with id " + id });
      }
      res.status(200).json(movie);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: "Movie not found with id " + id });
      }
      return res.status(500).json({ message: "Error retrieving movie with id " + id });
    });
};


