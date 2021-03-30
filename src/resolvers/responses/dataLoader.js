import DataLoader from "dataloader";
import { logger } from "../../infrastructure";
import dal from "./dal";

const buildResponsesLoader = () => {
  logger.info("Creating loader for responses")
  return new DataLoader(
    async (responseIds) => await dal.searchAResponse(responseIds)
  );
};

export default {
  responses: buildResponsesLoader(),
};
