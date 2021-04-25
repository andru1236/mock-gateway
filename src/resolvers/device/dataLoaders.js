import DataLoader from "dataloader";
import { logger } from "../../infrastructure";
import dal from "./dal";

const buildDeviceDataloaders = () => {
  logger.info("Creating loaders for devices");
  return new DataLoader(async (deviceIds) => {
    return await dal.searchOneDevice(deviceIds);
  });
};

export default {
  devices: buildDeviceDataloaders(),
};
