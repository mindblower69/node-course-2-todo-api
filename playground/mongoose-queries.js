const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
var id = '5acf9da50848780a881a13611';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}*/

//Find all that matches (array)
/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

//Find one (first, returned as object)
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});*/


/*
//Find one by ID (returned as object)
Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('ID not found')
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));*/

User.findById('5acd0b23ccb4461ad8d78028').then((user) => {
  if(!user){
    return console.log('User not found')
  }
  console.log('User by ID', user)
}).catch((e) => console.log(e));
