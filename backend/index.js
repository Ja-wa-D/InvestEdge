require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();


app.listen(port, () => {
  console.log('Server is running on port 3002');
  console.log("MongoDB URI:", process.env.MONGO_URI);

  mongoose.connect(uri);
  console.log('Connected to MongoDB');

});