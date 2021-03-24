import express from "express";
import { ApolloServer } from "apollo-server-express";

import { apolloSchema } from "./gqlSchemas.js";
import { logger } from "../infrastructure";

const server = new ApolloServer(apolloSchema);
const app = express();
server.applyMiddleware({ app });

export const start = () => {
  
  app.listen({ port: 4000 }, () =>
    logger.debug("Now browse to http://localhost:4000" + server.graphqlPath)
  );
};
