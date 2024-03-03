
const express = require('express');
const router = express.Router();

const MovieRoutes = require('./movie.routes.js');
const GenreRoutes = require('./genre.routes.js');
const ArtistRoutes = require('./artist.routes.js');
const signUp =require('./user.routes.js')

router.use('/', MovieRoutes);
router.use('/', GenreRoutes);
router.use('/', ArtistRoutes);
router.use('/',signUp)

module.exports = router;
