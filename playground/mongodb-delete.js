// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Riya', age: 24};
var {name} = user;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server!!');
  }
  console.log('Connected to MongoDB Server!!');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({text: 'Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Riya'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c0e512dbcec0d55c349cb84'
  )}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  // client.close();
});