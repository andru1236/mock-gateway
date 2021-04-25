// TODO: This feature should be in the UI based on the current responses

import { errorHandler, errors, errorInfo } from "./errors";
import WriteJsonFile from "write-json-file";
import readEnv from "./readEnv";

readEnv();

const EXPORTED_JSON_PATH = process.env.EXPORTED_JSON_RESPONSES_PATH;

export const writeJsonFile = async (fileNamePath, content) => {
  try {
    if (typeof content !== "object" || content === null || content === undefined) {
      throw new errors.ResponseError(errorInfo['jsonError']['emptyJson'].message);
    }

    const responseFilePath = `${EXPORTED_JSON_PATH}${fileNamePath}`;
    console.log(responseFilePath);
    if (responseFilePath === '' || responseFilePath === null || responseFilePath === undefined) {
      throw new errors.ResponseError(errorInfo['jsonError']['fileName'].message);
    }

    await WriteJsonFile(responseFilePath, content);    
    return errorInfo['defaultSuccess']['200'].message;
  } catch (error) {
    return errorHandler(error);
  }
};