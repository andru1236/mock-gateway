import { errors } from "./customErrors";
import { logger } from "../logger";

export const errorHandler = (error) => {
  logger.error(error.message);
  if (error instanceof errors.DatabaseError) {
    return "Something wrong with the data base";
  }
  if (error instanceof errors.NoFoundError) {
    return "Error: no found";
  }
  if (error instanceof Error) {
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
