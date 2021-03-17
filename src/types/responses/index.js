import { gql } from 'apollo-server-express';

const responseSchema = gql`
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

export default responseSchema;