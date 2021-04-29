import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";

import { apolloSchema } from "./gqlSchemas.js";
import { logger, readEnv } from "../infrastructure";

readEnv();

const server = new ApolloServer(apolloSchema);
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
server.applyMiddleware({ app });


export const start = () => {
  app.listen({port: process.env.GQL_PORT}, () =>
    logger.debug(
      `GQL running over to http://localhost:${process.env.GQL_PORT}` +
        server.graphqlPath
    )
  );
};
