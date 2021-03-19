import { gql } from 'apollo-server-express';
import apisType from './apis/queries.js';
import responseType from './responses/queries.js';

const typeDefs = gql`
  scalar JSON

  # The Query schema
  type Query {
    api(_id: String!): Api
    apis: [Api]
    response(_id: String!): Response
    responses: [Response]
  }
  # Include schemas
  ${apisType}
  ${responseType}
`;

export {typeDefs};