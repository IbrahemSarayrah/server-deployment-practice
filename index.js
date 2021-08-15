'use strict';

require('dotenv').config('./server')

const server = require('./server')

server.start(process.env.PORT || 3005)