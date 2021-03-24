import { ServerData, executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";

const serverData = new ServerData();

const createAPI = async (_, args) => {
  const body = {
    name: args.name,
    port: args.port,
  };

  const { mockApiPath, method } = apiTranslator.createApi;

  // Example callback
  const callback = (response) => {
    console.log(response);
    return response;
  };

  return await executeApiBrige(mockApiPath, method, body, callback);
};

const updateAPI = async (parent, args, context, info) => {
  let url = "apis/" + args.apiId;
  let apiBody = {
    name: args.name,
    port: args.port,
  };
  // update api data
  let res = await serverData.put(apiBody, url);
  return res.status == 200
    ? null
    : "Error " + res.status + " , Message : " + res.message;
};
const removeAPI = async (parent, args, context, info) => {
  let url = "apis/" + args.apiId;
  // remove api data
  let res = await serverData.deleteApiData(url);
  return res.status == 200
    ? null
    : "Error " + res.status + " , Message : " + res.message;
};
const createRoute = (parent, args, context, info) => {
  return "Route created successfully!";
};
const updateRoute = (parent, args, context, info) => {
  return "Route updated successfully!";
};
const removeRoute = (parent, args, context, info) => {
  return "Route removed successfully!";
};

export default {
  createAPI,
  updateAPI,
  removeAPI,
  createRoute,
  updateRoute,
  removeRoute,
};
