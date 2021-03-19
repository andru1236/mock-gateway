import { gql } from 'apollo-server-express';

const responseTypes = gql`
  # The Response schema
  type Response {
    _id: String
    name: String
    response: JSON
    tracking_assignation: TrackingAssignation 
    created_on: String
  }
  type TrackingAssignation  {
    api_id: String
    routes: [TrackingRoute]
  }
  type TrackingRoute {
    path: String
    method: String
    date: String
  }
`;

const responseQuery = `
  response(_id: String!): Response
  responses: [Response]
`;

export {responseTypes, responseQuery};