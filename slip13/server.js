const mongoose = require('mongoose');

// Define the busDepo schema
const busDepoSchema = new mongoose.Schema({
  name: String,
  location: String,
});

// Define the busRoute schema
const busRouteSchema = new mongoose.Schema({
  name: String,
  route: String,
});

// Create the BusDepo model
const BusDepo = mongoose.model('BusDepo', busDepoSchema);

// Create the BusRoute model
const BusRoute = mongoose.model('BusRoute', busRouteSchema);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/busDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Insert sample documents into the bus-depo collection
    const busDepos = [
      {
        name: 'Pune Bus Depo',
        location: 'Pune',
      },
      {
        name: 'Satara Bus Depo',
        location: 'Satara',
      },
    ];

    // Insert the bus-depos into the collection
    BusDepo.insertMany(busDepos)
      .then(() => {
        console.log('Bus Depos inserted successfully');
        // Insert sample documents into the busroute collection
        const busRoutes = [
          {
            name: 'Shivneri',
            route: 'Pune to Satara',
          },
          {
            name: 'Shivshahi',
            route: 'Mumbai to Pune',
          },
        ];

        // Insert the bus-routes into the collection
        BusRoute.insertMany(busRoutes)
          .then(() => {
            console.log('Bus Routes inserted successfully');

            // Find the name of the bus whose route is "Pune to Satara"
            BusRoute.findOne({ route: 'Pune to Satara' })
              .then((a) => {
                console.log(`Bus name: ${a.name}`);
              })
              .catch((error) => {
                console.error('Error finding bus:', error);
              });
          })
          .catch((error) => {
            console.error('Error inserting bus routes:', error);
          });
      })
      .catch((error) => {
        console.error('Error inserting bus depos:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
