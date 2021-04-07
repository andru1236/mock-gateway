const apiQuery = `
  api(id: String!): Api
  apis(limit: Int, next: Int): [Api]
`;

export default apiQuery;