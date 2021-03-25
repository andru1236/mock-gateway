import fetch from "node-fetch";
import readEnv from "./readEnv";
import { errorHandler } from "./errors";
import { errors } from "./errors/customErrors";
import { logger } from "./logger";

readEnv();
const REST_API_URL = process.env.BASE_BACKEND_URL;
const { ResponseError } = errors;

const responseHandler = async (rawResponse, method) => {
  logger.debug(`responseHandler, transform raw response -> cleaned response`);
  const response = await rawResponse.json();
  logger.debug(response);
  
  // Response messages
  if ([200, 201].includes(response?.meta?.statusCode)) {
    const status = response.meta.statusCode;
    switch (method) {
      case 'POST':
        return "Post data successfully.";
      case 'PUT':
        return "Put data successfully.";
      case 'DELETE':
        return "Delete data successfully.";
      default:
        return "Execute successfully.";
    }
  }
  else {
    let message = "Something went wrong.";
    switch (method) {
      case 'POST':
        message = "Something went wrong when trying to Post data.";
      case 'PUT':
        message = "Something went wrong when trying to Put data.";
      case 'DELETE':
        message = "Something went wrong when trying to Delete data.";
      default:
    }

    return errorHandler(new ResponseError(message));
  }
};

export const executeApiBrige = async (
  urlPath,
  method,
  body = null,
  callback = null
) => {
  const httpSetting = {
    method: method.toUpperCase(),
    body: body !== null ? JSON.stringify(body) : null,
    headers: { "Content-Type": "application/json" },
  };

  logger.info(`Make requesto to Mock API REST: ${REST_API_URL}${urlPath}`);

  try {
    const apiUrlPath = `${REST_API_URL}${urlPath}`;
    const rawResponse = await fetch(apiUrlPath, httpSetting);
    const cleanedResponse = await responseHandler(rawResponse, httpSetting.method);
    if (callback !== null) {
      return callback(cleanedResponse);
    }
    return cleanedResponse;
    
  } catch (error) {
    return errorHandler(error);
  }
};
