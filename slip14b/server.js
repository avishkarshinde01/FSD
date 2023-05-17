const mongoose = require('mongoose');

// Define the actor schema
const actorSchema = new mongoose.Schema({
  name: String,
  birthPlace: String,
});

// Create the Actor model
const Actor = mongoose.model('Actor', actorSchema);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movieDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    const actor=[
        {
            name:'Robert Pattinson',
            birthPlace:'California'
        },
        {
            name:'Tom Holland',
            birthPlace:'California'
        }
    ];
    Actor.insertMany(actor)
    .then(()=>{console.log("Insertion Successful")})
    .catch(error=>{console.error("Insertion Failed")});

    // Query the database to count actors born in California
    Actor.countDocuments({ birthPlace: 'California' })
      .then((count) => {
        console.log(`Number of actors born in California: ${count}`);
      })
      .catch((error) => {
        console.error('Error querying the database:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
