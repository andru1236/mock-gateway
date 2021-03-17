import express from 'express';
import {server} from './server/serverHttp.js';

const app = express();

server.applyMiddleware({ app });

// GraphQL run with apollo server 
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);