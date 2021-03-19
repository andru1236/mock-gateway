import { makeExecutableSchema } from 'graphql-tools';
import {typeDefs} from '../types/index.js';
import {resolvers} from '../resolvers/index.js';

const schemaDefs = {
  typeDefs,
  resolvers,
};

export {schemaDefs};