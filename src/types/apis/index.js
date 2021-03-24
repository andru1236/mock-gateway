import { gql } from "apollo-server-express";
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from "graphql";
import { GraphQLJSON } from "graphql-type-json";

import mutations from "./mutations";
import queries from "./queries";

const ApiType = new GraphQLObjectType({
  name: "Api",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    port: { type: GraphQLInt },
    routes: { type: new GraphQLList(RouteType) },
    settings: { type: new SettingType() },
  }),
});

const RouteType = new GraphQLObjectType({
  name: "Route",
  fields: () => ({
    _id: { type: GraphQLString },
    path: { type: GraphQLString },
    resources: { type: GraphQLJSON },
  }),
});

const SettingType = new GraphQLObjectType({
  name: "Setting",
  fields: () => ({
    enabled: { type: new GraphQLBoolean() },
    created_on: { type: new GraphQLString() },
  }),
});

const apiType = gql`
  # The API schema
  type Api {
    id: String
    name: String
    port: Int
    routes: [Path]
    settings: Setting
  }
  type Path {
    id: String
    path: String
    resources: [Resource]
  }
  type Resource {
    method: String
    response: JSON
    params: [Param]
  }
  type Param {
    param: String
    response: JSON
  }
  type Route {
    path: String
    method: String
    response: JSON
  }
  type Setting {
    enabled: Boolean
    createdOn: String
  }
`;

export { apiType, mutations as apiMutations, queries as apiQueries };
