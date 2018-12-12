const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mangoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c10bc95a3ba207792611b3311';

// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo)
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found!');
//   }
//   console.log('Todo by id',todo)
// }).catch((e) => console.log(e));


User.findById('5c0f851e58aec121265a061e').then((user) => {
  if(!user) {
    return console.log('ID not found!');
  }
  console.log('User by id',user)
}).catch((e) => console.log(e));