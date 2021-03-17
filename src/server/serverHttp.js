import { ApolloServer } from 'apollo-server-express';
import { schemaDefs } from './schemaBuider.js';

// GraphQL server
const server = new ApolloServer(schemaDefs);

export {server};