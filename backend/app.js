const express = require('express');
const app = express();
const PORT = 4000;
const fs = require('fs');

app.use(express.json());

app.all(/(.*)/, (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
    next();
});

app.get('/getJokes', (req, res) => {
    fs.readFile('./json/jokes.json', (err, data) => { 
        if (err) throw err; 
        const jokes = JSON.parse(data);
        res.json(jokes);
    });
});

app.listen(PORT, function(req, res) {
    console.log(`Server is running at http://localhost:${PORT}`);
});
