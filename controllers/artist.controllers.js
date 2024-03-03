const db = require('../models');
const artist = db.Artist;

exports.findAllArtists()=(req,res)=>{
const artistid = res.params.artistid
   res.json(artistid);
}