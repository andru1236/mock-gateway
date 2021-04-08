import { GraphQLJSON } from "graphql-type-json";
import { Api, apiQueries, apiMutations, apisLoader } from "./apis";
import {
  Device,
  deviceMutations,
  deviceQueries,
  deviceDataLoaders,
} from "./device";

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
  Device,

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
  ...deviceDataLoaders,
};
