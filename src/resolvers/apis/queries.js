import { logger } from "../../infrastructure";
import dal from "./dal";

const api = async (_, args, { loaders }) => {
  logger.info(`Executing QUERY: api | params : ${JSON.stringify(args)}`);
  const api = await loaders.apis.load(args.id);
  return Array.isArray(api) ? api[0] : api;
};

const apis = async (_, { limit, next }) => {
  logger.info(`Executing QUERY: apis | NO params`);
  return await dal.searchAllApis(limit, next);
};

const countApis = async () => await dal.countApis();


export default {
  api,
  apis,
  countApis
};
