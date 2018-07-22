'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const lib = require('./api/lib');

const app = express();

let nextId = 7;

app.set('port', (process.env.PORT || 3001));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
app.get('/api/lib', (req, res) => {
    res.send(lib);
});
app.post('/api/lib', (req, res) => {
    const newItem = {
        "id": nextId++,
        "bookName": req.body.bookName,
        "favorite": req.body.favorite,
        "bookImg": req.body.bookImg
    };
    lib.push(newItem);
    res.send(newItem);
});

app.put('/api/lib/:id', (req, res) => {
    const libItem = lib.find(lib => lib.id == req.params.id);

    if(!libItem) return res.sendStatus(404);

    libItem.bookName = req.body.bookName || libItem.bookName;

    res.json(libItem);
});

app.patch('/api/lib/:id', (req, res) => {
    const libItem = lib.find(lib => lib.id == req.params.id);

    if(!libItem) return res.sendStatus(404);

    libItem.favorite = !libItem.favorite;

    res.json(libItem);
});

app.delete('/api/lib/:id', (req, res) => {
    const index = lib.findIndex(lib => lib.id == req.params.id);

    if(index === -1) return res.sendStatus(404);

    lib.splice(index, 1);

    res.sendStatus(204);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/build/index.html`, (error, html) => {
        if(error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    })
});

app.listen(app.get('port'), () => console.log(`Server is listening: ${app.get('port')}`));