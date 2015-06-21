/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
var express = require('express');

var environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[environment];

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

app.listen(config.port);

console.log('Environment: ' + environment);
console.log('Listening on Port ' + config.port + ' ...\n');