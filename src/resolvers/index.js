import { GraphQLJSON } from "graphql-type-json";
import { Api, apiQueries, apiMutations, apisLoader } from "./apis";
import {
  Response,
  responseQueries,
  responseMutations,
  responseLoaders,
} from "./responses";

export const resolvers = {
  JSON: GraphQLJSON,

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

export const loaders = {
  ...responseLoaders,
  ...apisLoader
};
