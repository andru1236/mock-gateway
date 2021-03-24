import { gql } from "apollo-server-express";
import { apiType, apiMutations, apiQueries } from "./apis";
import { responseType, responseMutations, responseQueries } from "./responses";

const typeDefs = gql`
  scalar JSON

  # Include schemas
  ${apiType}
  ${responseType}


  # The Query schema
  type Query {
    ${apiQueries}
    ${responseQueries}
  }

  # Include mutations
  type Mutation {
    ${apiMutations}
    ${responseMutations}
  }
`;

export default typeDefs;
