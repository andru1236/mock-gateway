import { gql } from 'apollo-server-express';
import { apiTypes, apiQuery } from './apis/queries.js';
import { responseTypes, responseQuery } from './responses/queries.js';

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
`;

export {typeDefs};