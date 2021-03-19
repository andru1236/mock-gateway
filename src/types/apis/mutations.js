// Api Mutations

const apiMutations = `
  createAPI(name: String!, port: Int!): String
  updateAPI(apiId: String!, name: String!, port: Int!): String
  removeAPI(apiId: String!): String
  createRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  updateRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  removeRoute(apiId: String!, path: String!, method: String!): String
`;

export {apiMutations};