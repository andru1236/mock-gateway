import { gql } from 'apollo-server-express';

const apiTypes = gql`
  # The API schema
  type Api {
    _id: String
    name: String
    port: Int
    routes: [Route]
    settings: Setting
  }
  type Route {
    _id: String
    path: String
    resources: JSON
  }
  type Setting {
    enabled: Boolean
    created_on: String
  }
`;

const apiQuery = `
  api(_id: String!): Api
  apis: [Api]
`;

export {apiTypes, apiQuery};