const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found'})
})



module.exports = server;