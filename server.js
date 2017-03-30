const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Load environment variables from .env
require('./server/config');

const routes = require('./server/web');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on port ${port}`));
