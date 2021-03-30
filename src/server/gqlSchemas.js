import typeDefs from "../types";
import resolvers from "../resolvers";
import { apisLoader } from "../resolvers/apis";
import { responsesLoader } from "../resolvers/responses";

const apolloSchema = {
  typeDefs,
  resolvers,
  context: () => ({
    loaders: {
      apisLoader: apisLoader(),
      responsesLoader: responsesLoader()
    }
  })
};

export { apolloSchema };
