const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((result) => {
  console.log(result);
});
*/

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5ad4df35a01c6133791c139e'}).then((todo) => {
  console.log(todo);
})


// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5ad4df35a01c6133791c139e').then((todo) => {
  console.log(todo);
})
