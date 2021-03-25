import { gql } from "apollo-server-express";

import mutations from "./mutations";
import queries from "./queries";

const apiType = gql`
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
