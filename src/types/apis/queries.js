import { gql } from 'apollo-server-express';

const apiTypes = gql`
  # The API schema
  type Api {
    _id: String
    name: String
    port: Int
    routes: [Path]
    settings: Setting
  }
  type Path {
    _id: String
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
    created_on: String
  }
`;

const apiQuery = `
  api(_id: String!): Api
  apis: [Api]
`;

export {apiTypes, apiQuery};