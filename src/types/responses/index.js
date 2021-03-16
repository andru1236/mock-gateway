const { gql } = require('apollo-server-express');

module.exports = gql`
  # The Response schema
    type Response {
        _id: String
        name: String
        response: String
    }
`;