const responseQuery = `
  response(id: String!): Response
  responses(limit: Int, next: Int): [Response]
`;

export default responseQuery;
