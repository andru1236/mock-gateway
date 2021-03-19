// Api Mutations

const apiMutations = `
  createAPI(name: String!, port: Int!): String
  updateAPI(name: String!, port: Int!): String
  removeAPI(_id: String!): String
  createRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  updateRoute(apiId: String!, path: String!, method: String!, response: JSON): String
  removeRoute(apiId: String!, path: String!, method: String!): String
`;

export {apiMutations};