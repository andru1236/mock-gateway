const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../types');
const resolvers = require('../resolvers');
// GraphQL server
module.exports =  new ApolloServer({ typeDefs, resolvers });