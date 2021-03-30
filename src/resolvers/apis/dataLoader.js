import DataLoader from "dataloader";
import { logger } from "../../infrastructure";
import dal from "./dal";

const buildApisLoader = () => {
  logger.info("Creating loader for apis");
  return new DataLoader(async (apisId) => await dal.searchAnApi(apisId));
};

export default {
  apis: buildApisLoader()
}

