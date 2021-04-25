import { logger } from "../../infrastructure";
import dal from "./dal";

const device = async (_, { deviceId }, { loaders }) => {
  logger.info(`Executing Query| device [${deviceId}]`);
  return await loaders.devices.load(deviceId);
};

const devices = async () => {
  logger.info("Executing Query| devices");
  return await dal.searchAllDevices();
};

export default {
  device,
  devices,
};
