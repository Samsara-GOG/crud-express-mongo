const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'game-of-thrones';
let db;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);

  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);
});
