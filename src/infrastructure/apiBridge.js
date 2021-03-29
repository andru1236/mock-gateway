import fetch from "node-fetch";
import readEnv from "./readEnv";
import { errorHandler, errors, errorInfo } from "./errors";
import { logger } from "./logger";

readEnv();
const REST_API_URL = process.env.BASE_BACKEND_URL;
const { ResponseError } = errors;

const responseHandler = async (rawResponse, method) => {
  logger.debug(`responseHandler, transform raw response -> cleaned response`);
  const response = await rawResponse.json();
  
  // Response messages
  if ([200, 201].includes(response?.meta?.statusCode)) {
    const status = response.meta.statusCode.toString();
    const res = errorInfo['success'][method] ? 
      errorInfo['success'][method] : 
      errorInfo['defaultSuccess'][status];

    logger.debug(res);
    return res;
  }
  else {
    const res = errorInfo['responseError'][method] ? 
      errorInfo['responseError'][method] : 
      errorInfo['defaultError']['400'];

    logger.error(res.message);
    return errorHandler(new ResponseError(res.message));
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
