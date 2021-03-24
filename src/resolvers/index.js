import { GraphQLJSON } from "graphql-type-json";
import { apiQueries, apiMutations } from "./apis";
import { responseQueries, responseMutations } from "./responses";

export default {
  JSON: GraphQLJSON,
  
  // add the models to resolve


  Query: {
    ...apiQueries,
    ...responseQueries,
  },

  Mutation: {
    ...apiMutations,
    ...responseMutations,
  },
};
