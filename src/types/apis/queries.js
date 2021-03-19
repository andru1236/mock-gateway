import { gql } from 'apollo-server-express';

const apiSchema = gql`
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

export default apiSchema;