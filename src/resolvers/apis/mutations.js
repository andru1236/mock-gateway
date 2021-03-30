import { executeApiBrige, logger } from "../../infrastructure";
import apiTranslator from "./apiTranslator";
import dal from "./dal";

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

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
};

const removeAPI = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: removeAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.removeApi(args.apiId);
  const callback = async (res) => {
    if (res.status == 200) {
      await loaders.apis.clear(args.apiId);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, {}, callback);
};

// start api
const startAPI = async (_, args) => {
  logger.info(`Execute MUTATION: startAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.startApi(args.apiId);
  return await executeApiBrige(apiPath, method, {}, (res) => {
    return res.message;
  });
};

// stop api
const stopAPI = async (_, args) => {
  logger.info(`Execute MUTATION: stopAPI | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.stopApi(args.apiId);
  return await executeApiBrige(apiPath, method, {}, (res) => {
    return res.message;
  });
};

const createRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: createRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.createRoute(args.apiId);
  let body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
};

const updateRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: updateRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.updateRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
};

const removeRoute = async (_, args, { loaders }) => {
  logger.info(`Execute MUTATION: removeRoute | params: ${JSON.stringify(args)}`);
  const { apiPath, method } = apiTranslator.removeRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
  };

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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

  const callback = async (res) => {
    if (res.status == 200) {
      const apiObj = await dal.searchAnApi(args.apiId);
      await loaders.apis.prime(args.apiId, apiObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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
