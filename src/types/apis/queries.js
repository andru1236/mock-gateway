const apiQuery = `
  api(id: String!): Api
  apis(limit: Int, next: Int): [Api]
  countApis: Int
`;

export default apiQuery;