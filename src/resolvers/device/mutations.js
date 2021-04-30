import {
  grpcStopSimulation,
  grpcStartSimulation,
  grpcFixDbAgent,
} from "../../infrastructure/protocol_buffer/simulator_client";

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

const startSimulation = async (_, { deviceId }) => {
  logger.info("Executing MUTATION| startSimulation");
  return await grpcStartSimulation(deviceId);
};

const stopSimulation = async (_, { deviceId }) => {
  logger.info("Executing MUTATION| stopSimulation");
  return await grpcStopSimulation(deviceId);
};

const fixAgentDb = async (_, { agentDb }) => {
  logger.info("Executing MUTATION| fixAgent");
  return await grpcFixDbAgent(agentDb);
};

export default {
  createDevice,
  updateDevice,
  removeDevice,
  startSimulation,
  stopSimulation,
  fixAgentDb,
};
