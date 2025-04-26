const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Bible Translation API is running.');
});

// Connect to MongoDB & start server
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`API listening on port ${PORT}`)))
  .catch(err => console.error('Mongo connection error:', err));
