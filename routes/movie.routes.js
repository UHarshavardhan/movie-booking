const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');


router.get('/movies', async (req, res) => {
  try {
    console.log("hjdahakbdj");
    const { status } = req.query;
    let movies;
    if (status === 'PUBLISHED') {
      movies = await Movie.find({ published: true });
    } else if (status === 'RELEASED') {
      movies = await Movie.find({ released: true });
    } else {
      movies = await Movie.find();
    }
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/movies/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/movies/search', async (req, res) => {
  try {
    const { status, title, genres, artists, start_date, end_date } = req.query;
    const query = {};
    if (status) {
      query.released = (status.toUpperCase() === 'RELEASED');
    }
    if (title) {
      query.title = new RegExp(title, 'i');
    }
    if (genres) {
      query.genres = { $in: genres.split(',') };
    }
    if (artists) {
      query['artists.first_name'] = new RegExp(artists, 'i');
    }
    if (start_date && end_date) {
      query.release_date = { $gte: new Date(start_date), $lte: new Date(end_date) };
    }
    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
