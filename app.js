'use strict';
const test = require('./controllers/testQuery.js');

const express = require('express');

//Constants
const PORT = 80;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', async(req, res) => {
    let fecha = await get
    res.send('Hello World MDF 5');
});

app.listen(PORT, HOST);
console.log(`App NodeJS running at: http://${HOST}:${PORT}`);

