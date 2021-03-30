import { executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";
import dal from "./dal";

const createResponse = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createResponse();
  const body = {
    name: args.name,
    response: args.response,
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
    response: args.response,
  };

  const callback = async (res) => {
    if (res.status == 200) {
      const responseObj = await dal.searchAResponse(args.responseId);
      await responsesLoader.prime(args.responseId, responseObj);
    }
  
    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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
  const responsesLoader = context.loaders.responsesLoader;
  const { apiPath, method } = apiTranslator.assignResponseToApi(
    args.responseId
  );
  const body = {
    api_id: args.apiId,
    path: args.path,
    method: args.method,
  };

  const callback = async (res) => {
    if (res.status == 200) {
      const responseObj = await dal.searchAResponse(args.responseId);
      await responsesLoader.prime(args.responseId, responseObj);
    }
  
    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
};

export default {
  createResponse,
  updateResponse,
  removeResponse,
  assignResponseToApi,
};
