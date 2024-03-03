
const express = require('express');
const app = express();
const movie = require('./routes/routes');
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors());

app.use('/api',movie);


app.get('/', (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});


const db = require("./models");
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


