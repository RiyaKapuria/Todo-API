const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mangoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c10bc95a3ba207792611b3311';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid.');
}

Todo.remove({}).then((result) => console.log(result));

Todo.findOneAndRemove({
  _id: id
}).then((todo) => console.log('Todo',todo));

Todo.findByIdAndRemove(id).then((todo) => console.log('Todo',todo));