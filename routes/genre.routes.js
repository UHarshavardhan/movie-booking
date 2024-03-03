const express = require('express');
const router = express.Router();
const Genre = require('../models/genre.model');


router.get('/genre', async (req, res) => {
  try {
    console.log("dbshbdhs");
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
