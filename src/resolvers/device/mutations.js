import { logger } from "../../infrastructure";
import dal from "./dal";

const createDevice = async (_, args) => {
  logger.info("Executing MUTATION| createDevice");
  const { name, port, agentDb } = args;
  await dal.saveDevice(name, port, agentDb);
  return true;
};

const updateDevice = async (_, args, { loaders }) => {
  logger.info("Executing MUTATION| UpdateDevice");
  const { deviceId, name, port, agentDb } = args;
  await dal.updateDevice(deviceId, name, port, agentDb);
  const deviceObj = await dal.searchOneDevice(deviceId);
  await loaders.devices.prime(deviceId, deviceObj[0]);
  return true;
};

const removeDevice = async (_, args, { loaders }) => {
  logger.info("Executing MUTATION| removeDevice");
  const { deviceId } = args;
  await dal.removeDevice(deviceId);
  await loaders.devices.clear(deviceId);
  return true;
};

export default {
  createDevice,
  updateDevice,
  removeDevice,
};
