//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // equivalent to the line above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');//return makes sure the rest of the function isn't executed
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

/*  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ac7c5437e1f595eb7b590db')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  //Challenge, update name, increment age
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ac2e7bffa78dbf09bafd41a')
  }, {
    $set: {
      name: "JC"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
//https://docs.mongodb.com/manual/reference/operator/update/
