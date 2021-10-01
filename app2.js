const express = require('express');
var routes = require('./routes');

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 80;
const HOST = '0.0.0.0';

app.use(...routes);

app.listen(PORT, HOST);
console.log(`App NodeJS running at: http://${HOST}:${PORT}`);
