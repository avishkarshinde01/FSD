const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'companyDB';

// Sample product and service documents
const productDocuments = [
  { name: 'Product A', company: 'TCS' },
  { name: 'Product B', company: 'Google' },
  { name: 'Product C', company: 'TCS' }
];

const serviceDocuments = [
  { name: 'Service X', company: 'Apple' },
  { name: 'Service Y', company: 'TCS' },
  { name: 'Service Z', company: 'Microsoft' }
];

// Connect to the MongoDB server
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected successfully to the database');

  // Get the companyDB database
  const db = client.db(dbName);

  // Get the product collection
  const productCollection = db.collection('Product');

  // Insert product documents
  productCollection.insertMany(productDocuments, (err, result) => {
    if (err) {
      console.error('Error inserting product documents:', err);
    } else {
      console.log(`Inserted product documents`);
    }

    // Get the service collection
    const serviceCollection = db.collection('Service');

    // Insert service documents
    serviceCollection.insertMany(serviceDocuments, (err, result) => {
      if (err) {
        console.error('Error inserting service documents:', err);
      } else {
        console.log(`Inserted service documents`);
      }

    //   // Find product documents where the company name is "TCS"
    //   productCollection.find({ company: 'TCS' }).toArray((err, products) => {
    //     if (err) {
    //       console.error('Error retrieving product documents:', err);
    //     } else {
    //       console.log('Product documents with company name "TCS":');
    //       console.log(products);
    //     }

        // Close the MongoDB connection
        client.close();
      });
    });
  });
// });
