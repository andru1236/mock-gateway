import { GraphQLJSON } from "graphql-type-json";
import { apiQueries, apiMutations } from "./apis";
import { responseQueries, responseMutations } from "./responses";

export const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    ...apiQueries,
    ...responseQueries,
  },

  Mutation: {
    ...apiMutations,
    ...responseMutations,
  },
};
