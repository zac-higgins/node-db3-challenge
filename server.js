const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

//----------Sanity Check----------//
server.get('/', (req, res) => {
    res.send('Project: node-db3-challenge is up and running!');
});

module.exports = server;