import { gql } from "apollo-server-express";
import { apiType, apiMutations, apiQueries } from "./apis";
import { responseType, responseMutations, responseQueries } from "./responses";
import { DeviceType, deviceMutations, deviceQueries } from './device';

const typeDefs = gql`
  scalar JSON

  # Include schemas
  ${apiType}
  ${responseType}
  ${DeviceType}


  # include Query schema
  type Query {
    ${apiQueries}
    ${responseQueries}
    ${deviceQueries}
  }

  # Include mutations
  type Mutation {
    ${apiMutations}
    ${responseMutations}
    ${deviceMutations}
  }
`;

export default typeDefs;
