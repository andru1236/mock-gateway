import { executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";

const createAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createApi();
  const body = {
    name: args.name,
    port: args.port,
  };

  const res = await executeApiBrige(apiPath, method, body, (res) => res);
  return res;
};

const updateAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.updateApi(args.apiId);
  const body = {
    name: args.name,
    port: args.port,
  };

  const res = await executeApiBrige(apiPath, method, body);
  //context.loaders.apis.prime(res.id, res)
  return res;
};

const removeAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeApi(args.apiId);
  const res = await executeApiBrige(apiPath, method, {});
  return res;
};

const startAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.startApi(args.apiId);
  const res = await executeApiBrige(apiPath, method, {});
  return res;
};

const stopAPI = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.stopApi(args.apiId);
  const res = await executeApiBrige(apiPath, method, {});
  return res;
};

const createRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createRoute(args.apiId);
  let body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

const updateRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.updateRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
    response: args.response,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

const removeRoute = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeRoute(args.apiId);
  const body = {
    path: args.path,
    method: args.method,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

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

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

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

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

const removeRouteParams = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeRouteParams(
    args.apiId,
    args.routeId
  );
  const body = {
    method: args.method,
    params: args.param,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
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
