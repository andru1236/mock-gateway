const express = require('express');
const app = express();
const server = require('./server/serverHttp');

server.applyMiddleware({ app });

// GraphQL run with apollo server 
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);