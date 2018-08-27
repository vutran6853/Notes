const express = require('express');
// Old way
const bodyParser = require('body-parser');
// New way
// const {json} = require('body-parser');
const port = 3001;

let books = [
  { title: 'Mistborn', rating: 3 },
  { title: 'Four Hour Work Week', rating: 4.5 },
  { title: 'Dune', rating: 5 },
  { title: 'Mistborn', rating: 5 }
];

const app = express();
// Old way
app.use(bodyParser.json());
// New way
// app.use(json())

//==== Endpoints ====

// Client
// axios.post('http://localhost:3001/api/books', {title:'book', rating: 2}).then((res)=>{
//   console.log(res)
// })

// Server
app.get('/api/books', (req, res) => {
  //REQ(Request): Is the request coming in from the client.
  //RES(Response): What we're sending back to the client from the server.
  res.status(200).json(books);
});

app.post('/api/books', (req, res) => {
  console.log(req.body);
  books.push(req.body);
  res.status(200).json(`The book ${req.body.title} was added to our books!`);
});

// Client
// axios.put('http://localhost:3001/api/books?book=Mistborn').then((res)=>{
//   console.log(res)
// })

app.put('/api/books', (req, res) => {
  books.map(e => {
    e.title === req.query.book ? (e.title = 'New Title') : false;
  });
  res.status(200).json(books);
});

// Client
// axios.delete('http://localhost:3001/api/books/${num}').then((res)=>{
//   console.log(res)
// })

app.delete('/api/books/:num', (req, res) => {
  if (books.length - 1 < req.query.num) {
    return res.status(400).json("Couldn't delete non-existent book");
  } else if (typeof req.query.num !== 'number') {
    return res.status(404).json('Must be a number');
  } else {
    books.splice(req.params.num, 1);
    return res.status(200).json(books);
  }
});

app.listen(port, () => {
  console.log('listening on port: ', port);
});

// Body --> req.body
// Query --> req.query."name"
// Params --> req.params."name"