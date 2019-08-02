require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Note = require('./models/note')

app.use(bodyParser.json());
app.use(cors());

morgan.token('data', (request, response) => {
  return JSON.stringify(request.body);
});
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :data')
);

app.use(express.static('build'));

// let notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ];

app.get('/', (req, res) => {
  res.send('<h1>tyvoiax is amazing!</h1>');
});
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes.map(note => note.toJSON()));
  });
});

// fetch a single note
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note.toJSON());
  })
  // const id = Number(request.params.id);
  // console.log(id);

  // const note = notes.find(note => note.id === id);
  // if (note) {
  //   response.json(note);
  // } else {
  //   response.status(404).end();
  // }
});

// delete a single note
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);
  response.status(204).end();
});

// add a note
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0;
  return maxId + 1;
};
app.post('/api/notes', (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }
  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  });
  //notes = notes.concat(note);
  note.save().then(savedNote => {
    response.json(savedNote.toJSON());
  })
});

const PORT = process.env.PORT
console.log(PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
