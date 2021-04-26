import { errors } from "./customErrors";
import { logger } from "../logger";

export const errorHandler = (error) => {
  logger.error(error.message);
  if (error instanceof errors.DatabaseError) {
    logger.error("Something wrong with the data base");
    throw new errors.GatewayError("Bad requerst");
  }
  if (error instanceof errors.NoFoundError) {
    logger.error("Error: no found");
    throw new errors.GatewayError("Bad requerst");
  }
  if (error instanceof errors.ResponseError) {
    logger.error("Error in Response module");
    throw new errors.GatewayError("Bad requerst");
  }
  if (error instanceof errors.LegacyBadRequestError) {
    throw new errors.GatewayError(error.message);
  }
  if (error instanceof errors.LegacyErrorSystem) {
    throw new error.GatewayError(error.message);
  }
  if (error instanceof Error) {
    logger.error(`Critical ${error.message}`);
    throw error;
  }
};

export const withErrorHandler = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    return errorHandler(error);
  }
};
