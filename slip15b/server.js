const mongoose = require('mongoose');

// Define the movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  genre: String,
});

// Create the Movie model
const Movie = mongoose.model('Movie', movieSchema);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movieDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Insert sample documents into the movie collection
    const movies = [
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        genre: 'Drama',
      },
      {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        genre: 'Crime, Drama',
      },
      {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        genre: 'Crime, Drama',
      },
    ];

    // Insert the movies into the collection
    Movie.insertMany(movies)
      .then(() => {
        console.log('Movies inserted successfully');
      })
      .catch((error) => {
        console.error('Error inserting movies:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
