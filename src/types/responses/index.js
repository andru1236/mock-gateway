import { gql } from "apollo-server-express";

import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from "graphql";

import { GraphQLJSON } from "graphql-type-json";

import mutations from "./mutations";
import queries from "./queries";

const ResponseType = new GraphQLObjectType({
  name: "Response",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    response: { type: GraphQLJSON },
    tracking_assignation: { type: TrackingAssignationType },
    created_on: { type: GraphQLString },
  }),
});

const TrackingAssignationType = new GraphQLObjectType({
  name: "TrackingAssignation",
  fields: () => ({
    api_id: { type: GraphQLString },
    routes: { type: new GraphQLList(TrackingRouteType) },
  }),
});

const TrackingRouteType = new GraphQLObjectType({
  name: "TrackingRoute",
  fields: () => ({
    path: { type: new GraphQLString() },
    method: { type: new GraphQLString() },
    date: { type: new GraphQLString() },
  }),
});

const responseType = gql`
  # The Response schema
  type Response {
    _id: String
    name: String
    response: JSON
    tracking_assignation: TrackingAssignation
    created_on: String
  }
  type TrackingAssignation {
    api_id: String
    routes: [TrackingRoute]
  }
  type TrackingRoute {
    path: String
    method: String
    date: String
  }
`;

export { responseType, queries as responseQueries, mutations as responseMutations };
