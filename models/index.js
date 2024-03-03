const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/moviesdb';

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.Artist = require('./artist.model');
db.Genre = require('./genre.model');
db.Movie = require('./movie.model');
db.User = require('./user.model');

module.exports = db;
