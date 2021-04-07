import { GraphQLJSON } from "graphql-type-json";
import { Api, apiQueries, apiMutations, apisLoader } from "./apis";
import { deviceMutations, deviceQueries } from "./device";
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
    ...deviceQueries,
  },

  Mutation: {
    ...apiMutations,
    ...responseMutations,
    ...deviceMutations,
  },
};

export const loaders = {
  ...responseLoaders,
  ...apisLoader,
};
