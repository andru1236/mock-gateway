const responseMutation = `
  createResponse(name: String!, response: JSON!): String
  updateResponse(responseId: String!, name: String!, response: JSON!): String
  removeResponse(responseId: String!): String
  assignResponseToApi(responseId: String!, apiId: String!, path: String!, method: String!): String
  exportResponseJSON(fileName: String!, response: JSON!): String
`;

export default responseMutation;
