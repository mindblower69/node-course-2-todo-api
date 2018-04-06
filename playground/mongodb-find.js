//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // equivalent to the line above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');//return makes sure the rest of the function isn't executed
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
/*
  db.collection('Todos').find({
    _id: new ObjectID('5a9db349a741136e784e8298')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });
*/
/*
db.collection('Todos').find().count().then((count) => {
  console.log(`Todos count: ${count}`);
}, (err) =>{
  console.log('Unable to fetch todos', err);
});
*/

db.collection('Users').find({
  name: 'Gian'
}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) =>{
  console.log('Unable to fetch todos', err);
});

  //client.close();
});




//flexslider , slider et sliderArgs
//errorMessage  Impossible to execute « postMessage » on « DOMWindow »
//errorMessage Failed to load <script> element from source: « https://static.doubleclick.net/instream/ad_status.js ».

















//
