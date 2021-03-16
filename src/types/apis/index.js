const { gql } = require('apollo-server-express');

module.exports = gql`
  # The API schema
    type Query {
        api(_id: String!): Api
        apis(name: String): [Api]
    }
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
        resources: String
    }
    type Setting {
        enabled: Boolean
        created_on: String
    }
`;