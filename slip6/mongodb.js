const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'movie';
async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const film = db.collection('film');
  const actor = db.collection('actor')
//let data=await collection.find({name:"war"}).toArray();
let insert_film = await film.insertOne({name:"war",release_date:"21 Feb 2021"});
let insert_actor = await film.insertOne({name:"hritik",age:"55"});
let data_film=await film.find().toArray();
let data_actor=await actor.find().toArray();
console.log(data_film);
console.log(data_actor);
}
main()
