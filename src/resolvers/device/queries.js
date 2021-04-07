import { logger } from "../../infrastructure";
import dal from "./dal";

const device = async (_, { deviceId }, context) => {
  logger.info(`Executing Query| device [${deviceId}]`);
  const result = await dal.searchOneDevice(deviceId);
  return result[0];
};

const devices = async () => {
  logger.info("Executing Query| devices");
  return await dal.searchAllDevices();
};

export default {
  device,
  devices,
};
