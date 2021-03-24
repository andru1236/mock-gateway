import { GraphQLJSON } from "graphql-type-json";
import { Api, apiQueries, apiMutations } from "./apis";
import { Response, responseQueries, responseMutations } from "./responses";

export default {
  JSON: GraphQLJSON,
  
  // add the models to resolve
  Api,
  Response,

  Query: {
    ...apiQueries,
    ...responseQueries,
  },

  Mutation: {
    ...apiMutations,
    ...responseMutations,
  },
};
