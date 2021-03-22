import { apiQueries } from './apis/queries.js';
import { responseQueries } from './responses/queries.js';
import { apiMutations } from './apis/mutations.js';
import { responseMutations } from './responses/mutations.js';
import { GraphQLJSON } from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    ...apiQueries,
    ...responseQueries
  },

  Mutation: {
    ...apiMutations,
    ...responseMutations
  }
};

export {resolvers};