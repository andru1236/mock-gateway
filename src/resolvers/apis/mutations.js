import { executeApiBrige, logger } from "../../infrastructure";
import apiTranslator from "./apiTranslator";

const createAPI = async (_, args) => {
  logger.info(`Execute MUTATION: createAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.createApi();
  const body = {
    name: args.name,
    port: args.port,
  };

  return await executeApiBrige(apiPath, method, body, (res) => {
    return res.message;
  });
};

const updateAPI = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: updateAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.updateApi(args.apiId);
  const body = {
    name: args.name,
    port: args.port,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const removeAPI = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: removeAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.removeApi(args.apiId);
  const response = await executeApiBrige(apiPath, method, {});
  await loaders.apis.clear(args.apiId);
  return response.message
};

const startAPI = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: startAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.startApi(args.apiId);
  const response = await executeApiBrige(apiPath, method, {});
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const stopAPI = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: stopAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.stopApi(args.apiId);
  const response = await executeApiBrige(apiPath, method, {});
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const createRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: createRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.createRoute(args.apiId);
  let body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };
  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const updateRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: updateRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.updateRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const removeRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: removeRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.removeRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message
};

const createRouteParams = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: CreateRouteParams | params: ${JSON.stringify(args)}`
  );
  const { apiPath, method } = apiTranslator.createRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
    response: args.response,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const updateRouteParams = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: updateRouteParams | params: ${JSON.stringify(args)}`
  );

  const { apiPath, method } = apiTranslator.updateRouteParams(
    args.apiId,
    args.routeId
  );

  const body = {
    method: args.method,
    params: args.param,
    response: args.response,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

const removeRouteParams = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: removeRouteParams | params: ${JSON.stringify(args)}`
  );
  const { apiPath, method } = apiTranslator.removeRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.apis.clear(args.apiId);
  await loaders.apis.load(args.apiId);
  return response.message;
};

export default {
  createAPI,
  updateAPI,
  removeAPI,
  startAPI,
  stopAPI,
  createRoute,
  updateRoute,
  removeRoute,
  createRouteParams,
  updateRouteParams,
  removeRouteParams,
};
