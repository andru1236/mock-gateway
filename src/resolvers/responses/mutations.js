import { executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";

// create response
const createResponse = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createResponse();
  const body = {
    name: args.name,
    response: args.response
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

//update response
const updateResponse = async (_, args, context) => {
  const responsesLoader = context.loaders.responsesLoader;
  const { apiPath, method } = apiTranslator.updateResponse(args.responseId);
  const body = {
    name: args.name,
    response: args.response
  };

  return await executeApiBrige(apiPath, method, body, res => {
    if (res.status == 200) {
      responsesLoader.prime(args.responseId, body);
    }
  
    return res.message;
  });
};

// remove response
const removeResponse = async (_, args, context) => {
  const responsesLoader = context.loaders.responsesLoader;
  const { apiPath, method } = apiTranslator.removeResponse(args.responseId);

  return await executeApiBrige(apiPath, method, {}, res => {
    if (res.status == 200) {
      responsesLoader.clear(args.responseId);
    }
  
    return res.message;
  });
};

// assign response to api
const assignResponseToApi = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.assignResponseToApi(args.responseId);
  const body = {
    api_id: args.apiId,
    path: args.path,
    method: args.method
  };

  return await executeApiBrige(apiPath, method, body, res => {
    return res.message;
  });
};

export default {
  createResponse,
  updateResponse,
  removeResponse,
  assignResponseToApi
};