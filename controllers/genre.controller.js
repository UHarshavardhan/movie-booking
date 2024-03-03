const db = require('../models');
const artist = db.Genre;

exports.artist=(req,res)=>{
res.json(artist);

}