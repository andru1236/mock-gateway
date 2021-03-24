import typeDefs from "../types";
import { resolvers } from "../resolvers/index.js";

const apolloSchema = {
  typeDefs,
  resolvers,
};

export { apolloSchema };
