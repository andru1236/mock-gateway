import { logger } from "../../infrastructure";
import dal from "./dal";

const createDevice = async (_, args, context) => {
  logger.info("Executing MUTATION| createDevice");
  const { name, port, agentDb } = args;
  await dal.saveDevice(name, port, agentDb);
  return true;
};

const updateDevice = async (_, args, context) => {
  logger.info("Executing MUTATION| UpdateDevice");
  const { deviceId, name, port, agentDb } = args;
  await dal.updateDevice(deviceId, name, port, agentDb);
  return true;
};

const removeDevice = async (_, args, context) => {
  logger.info("Executing MUTATION| removeDevice");
  const { deviceId } = args;
  await dal.removeDevice(deviceId);
  return true;
};

export default {
  createDevice,
  updateDevice,
  removeDevice
};
