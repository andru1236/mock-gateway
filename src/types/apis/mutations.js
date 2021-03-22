// Api Mutations

const apiMutations = `
  createAPI(name: String!, port: Int!): String
  updateAPI(apiId: String!, name: String!, port: Int!): String
  removeAPI(apiId: String!): String
  startAPI(apiId: String!): String
  stopAPI(apiId: String!): String
  createRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  updateRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  removeRoute(apiId: String!, path: String!, method: String!): String
  createRouteParams(apiId: String!, routeId: String!, method: String!, param: String!, response: JSON): String
  updateRouteParams(apiId: String!, routeId: String!, method: String!, param: String!, response: JSON): String
  removeRouteParams(apiId: String!, routeId: String!, method: String!, param: String!): String
`;

export {apiMutations};