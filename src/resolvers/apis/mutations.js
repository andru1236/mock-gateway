import { executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";

const createAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createApi();
  const body = {
    name: args.name,
    port: args.port,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// update api
const updateAPI = async (_, args, context) => {
  const apisLoader = context.loaders.apisLoader;
  const { apiPath, method } = apiTranslator.updateApi(args.apiId);
  const body = {
    name: args.name,
    port: args.port,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    if (res.status == 200) {
      apisLoader.prime(args.apiId.toString(), body);
    }
  
    return res.message;
  });
};

// remove api
const removeAPI = async (_, args, context) => {
  const apisLoader = context.loaders.apisLoader;
  const { apiPath, method } = apiTranslator.removeApi(args.apiId);
  return await executeApiBrige(apiPath, method, {}, res => {
    if (res.status == 200) {
      apisLoader.clear(args.apiId.toString());
    }

    return res.message;
  });
};

// start api
const startAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.startApi(args.apiId);
  return await executeApiBrige(apiPath, method, {}, res => {
    return res.message;
  });
};

// stop api
const stopAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.stopApi(args.apiId);
  return await executeApiBrige(apiPath, method, {}, res => {
    return res.message;
  });
};

// create route
const createRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createRoute(args.apiId);
  let body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// update route
const updateRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.updateRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// remove route
const removeRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// create route params
const createRouteParams = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
    response: args.response,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// update route params
const updateRouteParams = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.updateRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
    response: args.response,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

// remove route params
const removeRouteParams = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
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
