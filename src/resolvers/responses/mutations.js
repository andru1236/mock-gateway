import { executeApiBrige } from "../../infrastructure";
import apiTranslator from "./apiTranslator";


const createResponse = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.createResponse();
  const body = {
    name: args.name,
    response: args.response,
  };

  const res = await executeApiBrige(apiPath, method, body, (res) => res);
  return res;
};

const updateResponse = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.updateResponse(args.responseId);
  const body = {
    name: args.name,
    response: args.response,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

const removeResponse = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.removeResponse(args.responseId);

  const res = await executeApiBrige(apiPath, method, {});
  return res;
};

const assignResponseToApi = async (_, args, context) => {
  const { apiPath, method } = apiTranslator.assignResponseToApi(
    args.responseId
  );
  const body = {
    api_id: args.apiId,
    path: args.path,
    method: args.method,
  };

  const res = await executeApiBrige(apiPath, method, body);
  return res;
};

export default {
  createResponse,
  updateResponse,
  removeResponse,
  assignResponseToApi,
};
