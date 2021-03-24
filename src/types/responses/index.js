import { gql } from "apollo-server-express";
import mutations from "./mutations";
import queries from "./queries";

const responseType = gql`
  type Response {
    id: String
    name: String
    response: JSON
    trackingAssignation: [TrackingAssignation]
    createdOn: String
  }
  type TrackingAssignation {
    api: Api
    routes: [TrackingRoute]
  }
  type TrackingRoute {
    path: String
    method: String
    date: String
  }
`;

export {
  responseType,
  queries as responseQueries,
  mutations as responseMutations,
};
