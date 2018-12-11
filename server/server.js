var mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var todo = new Todo({
  text: '  Edit this vedio    '
});

todo.save().then((doc) => {
  console.log('Saved Todo: ', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Todo! ', e);
});


var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

var user = new User({
  email: ''
});

user.save().then((doc) => {
  console.log('Saved User', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save User!',e);
});