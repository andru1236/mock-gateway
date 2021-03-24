import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schemaDefs } from "./schemaBuilder.js";

const server = new ApolloServer(schemaDefs);
const app = express();
server.applyMiddleware({ app });

export const start = () => {
  app.listen({ port: 4000 }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
};
