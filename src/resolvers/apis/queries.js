import { logger } from "../../infrastructure";
import dal from "./dal";

const api = async (_, args, { loaders }) => {
  logger.info(`Executing QUERY: api | params : ${JSON.stringify(args)}`);
  // TODO: Add a TTL to no cache the api
  //const api = await loaders.apis.load(args.id);
  const api = await dal.searchAnApi(args.id)
  return Array.isArray(api) ? api[0] : api;
};

const apis = async (_, { limit, next }) => {
  logger.info(`Executing QUERY: apis | NO params`);
  return await dal.searchAllApis(limit, next);
};

export default {
  api,
  apis,
};
