//const Apis = require('./apis');
const { gql } = require('apollo-server-express');
const apisType = require('./apis');
const responseType = require('./responses');

const typeDefs = gql`
    ${apisType}
    ${responseType}
`;

module.exports = typeDefs;