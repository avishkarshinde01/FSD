const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017';
// MongoDB database name
const dbName = 'signup';

// Connect to MongoDB
mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Create a Mongoose schema for the signup data
const signupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
});

// Create a Mongoose model for the signup data
const Signup = mongoose.model('Signup', signupSchema);

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files
app.use(express.static('public'));

// Signup endpoint
app.post('/signup', (req, res) => {
  // Get user data from request body
  const { name, email, password, phone } = req.body;

  // Create a new Signup document
  const signupData = new Signup({ name, email, password, phone });

  // Save the Signup document to the database
  signupData.save()
    .then(() => {
      res.status(201).send('Signup successful');
    })
    .catch((error) => {
      console.error('Error inserting document:', error);
      res.status(500).send('An error occurred');
    });
});

// Serve the signup.html file
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/signup.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
