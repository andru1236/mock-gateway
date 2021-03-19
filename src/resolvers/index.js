import { apiQueries } from './apis/queries.js';
import { responseQueries } from './responses/queries.js';
import { GraphQLJSON } from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    ...apiQueries,
    ...responseQueries
  }
};

export {resolvers};