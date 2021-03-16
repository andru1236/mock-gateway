const express = require('express');
const app = express();

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


app.listen(4001, () => console.log('server on port 4001'));