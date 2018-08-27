const express = require ('express');
const bodyParser = require ('body-parser');
const port = 3001;

let book = [
    { title: 'Mistborn', rating: 3},
    { title: 'Four Hour Work', rating: 4.5 },
    { title: 'Dune', rating: 5 }
];

const app = express();

// MIDDLEWARE BODYPARSER
app.use(bodyParser.json());

app.use(cors())     // <---- for extra security WHEN CONNECT BOTH FRONT AND BACK USEING EXPRESS AND NODE


app.get('/api/getDuded', (req, res) => {
    res.status(200).json(dudes);                //  <--- GRAB DATA FROM LOCAL FILE. RECEIVE SET-UP
})



//  ENDPOINT
app.get('/api/books', (request, response) => {
    response.status(200).json(book)
});

app.delete('/api/books/:index', (request, response) => {
    books.slice(request, params:index, 1)
    response.status(200).json(books);
})

app.listen(port, () => {
    console.log('listen on port', port);
});

