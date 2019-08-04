const mongoose = require('mongoose');
const password = require('../sensitive/password');

mongoose.set('useFindAndModify', false);

// DATABASE
// url to database.
// NOTE:- change default test name to a good name
//const url = `mongodb+srv://tyvoiax:${password}@cluster0-fw8cs.mongodb.net/note-app?retryWrites=true&w=majority`;

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

// connect to database
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

// create a schema
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: {
    type: Date,
    required: rue
  },
  important: Boolean
});

// format the objects returned by Mongoose
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

// create a model
module.exports = mongoose.model('Note', noteSchema);
