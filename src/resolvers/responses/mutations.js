import { executeApiBrige, logger, writeJsonFile } from "../../infrastructure";
import apiTranslator from "./apiTranslator";


const createResponse = async (_, args) => {
  logger.info(
    `Execute MUTATION: createResponse | params: ${JSON.stringify(args)}`
  );

  const { apiPath, method } = apiTranslator.createResponse();
  const body = {
    name: args.name,
    response: args.response,
  };

  return await executeApiBrige(apiPath, method, body, (res) => {
    return res.message;
  });
};


const updateResponse = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: updateResponse | params: ${JSON.stringify(args)}`
  );

  const { apiPath, method } = apiTranslator.updateResponse(args.responseId);
  const body = {
    name: args.name,
    response: args.response,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.responses.clear(args.responseId);
  await loaders.responses.load(args.responseId);
  return response.message;
};


const removeResponse = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: removeResponse | params: ${JSON.stringify(args)}`
  );
  const { apiPath, method } = apiTranslator.removeResponse(args.responseId);
  const response = await executeApiBrige(apiPath, method, {});
  await loaders.responses.clear(args.responseId);
  return response.message;
};


const assignResponseToApi = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: assignResponseToApi | params: ${JSON.stringify(args)}`
  );

  const { apiPath, method } = apiTranslator.assignResponseToApi(
    args.responseId
  );
  const body = {
    api_id: args.apiId,
    path: args.path,
    method: args.method,
  };

  const response = await executeApiBrige(apiPath, method, body);
  await loaders.responses.clear(args.responseId);
  await loaders.responses.load(args.responseId);
  return response.message;
};


const exportResponseJSON = async (_, { fileName, response }) => {
  logger.info(
    `Execute MUTATION: exportResponseJSON | JSON file name: ${fileName} | jsonContent: ${JSON.stringify(response)}`
  );

  return await writeJsonFile(fileName, response);
};

export default {
  createResponse,
  updateResponse,
  removeResponse,
  assignResponseToApi,
  exportResponseJSON
};
