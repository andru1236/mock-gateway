import { gql } from 'apollo-server-express';
import { apiTypes, apiQuery } from './apis/queries.js';
import { responseTypes, responseQuery } from './responses/queries.js';
import { apiMutations } from './apis/mutations.js';
import { responseMutations } from './responses/mutations.js';

const typeDefs = gql`
  scalar JSON

  # The Query schema
  type Query {
    ${apiQuery}
    ${responseQuery}
  }

  # Include schemas
  ${apiTypes}
  ${responseTypes}

  # Include mutations
  type Mutation {
    ${apiMutations}
    ${responseMutations}
  }
`;

export {typeDefs};