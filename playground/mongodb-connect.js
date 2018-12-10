const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server!!');
  }
  console.log('Connected to MongoDB Server!!');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do..',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert Todo!!', err);
  //   } 
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Riya',
    age: 24,
    location: 'Chennai'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Users!!', err);
    } 
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});