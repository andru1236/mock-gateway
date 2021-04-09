import { executeApiBrige, logger, writeJsonFile } from "../../infrastructure";
import apiTranslator from "./apiTranslator";
import dal from "./dal";

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

  const callback = async (res) => {
    if (res.status == 200) {
      const responseObj = await dal.searchAResponse(args.responseId);
      await loaders.responses.prime(args.responseId, responseObj);
    }
    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
};

const removeResponse = async (_, args, { loaders }) => {
  logger.info(
    `Execute MUTATION: removeResponse | params: ${JSON.stringify(args)}`
  );

  const { apiPath, method } = apiTranslator.removeResponse(args.responseId);

  return await executeApiBrige(apiPath, method, {}, (res) => {
    if (res.status == 200) {
      loaders.responses.clear(args.responseId);
    }

    return res.message;
  });
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

  const callback = async (res) => {
    if (res.status == 200) {
      const responseObj = await dal.searchAResponse(args.responseId);
      await loaders.responses.prime(args.responseId, responseObj);
    }

    return res.message;
  };

  return await executeApiBrige(apiPath, method, body, callback);
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
