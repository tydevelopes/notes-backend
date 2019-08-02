const mongoose = require('mongoose');

// exit if no password provided
if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}
// get password
const password = process.argv[2];

// url to database.
// NOTE:- change default test name to a good name
const url = `mongodb+srv://tyvoiax:${password}@cluster0-fw8cs.mongodb.net/note-app?retryWrites=true&w=majority`;

// connect to database
mongoose.connect(url, { useNewUrlParser: true });

// create a schema
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
});

// create a mdel
const Note = mongoose.model('Note', noteSchema);

// create a collection
// const note = new Note({
//   content: 'FullStack dev is amazing!',
//   date: new Date(),
//   important: true
// });

// save collection to databse
// note.save().then(response => {
//   console.log('note saved');
//   mongoose.connection.close();
// });

// get all collection
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});
