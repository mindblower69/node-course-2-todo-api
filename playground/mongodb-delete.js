//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // equivalent to the line above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');//return makes sure the rest of the function isn't executed
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // deleteMany
  //db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //  console.log(result);
  //});
  // deleteOne
  //db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //  console.log(result);
  //});
  // findOneAndDelete
  //db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //  console.log(result);
  //});

  //Delete all Bob and a unique ID
  /*db.collection('Users').deleteMany({name:'Bob'}).then((result) => {
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9d919084e09d2a60bd103b')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));//formating
  })*/
  //client.close();
});
