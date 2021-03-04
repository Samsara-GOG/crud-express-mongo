//  require the mongodb package.
const MongoClient = require('mongodb').MongoClient;

// You can connect to your local MongoDB with this url:
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'game-of-thrones';
let db;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);

  // Storing a reference to the database so you can use it later
  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);
});
