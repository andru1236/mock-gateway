import typeDefs from "../types";
import { resolvers, loaders } from "../resolvers";

const apolloSchema = {
  typeDefs,
  resolvers,
  context: () => ({
    loaders,
  }),
};

export { apolloSchema };
