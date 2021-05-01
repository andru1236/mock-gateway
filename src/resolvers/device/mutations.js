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
  await loaders.devices.clear(args.deviceId);
  await loaders.devices.load(args.deviceId);
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
  const response = await grpcStartSimulation(deviceId);
  logger.info(`Resolved response [${response}]`);
  return response;
};

const stopSimulation = async (_, { deviceId }) => {
  logger.info("Executing MUTATION| stopSimulation");
  return await grpcStopSimulation(deviceId);
};

const fixAgentDb = async (_, { agentDb }) => {
  logger.info("Executing MUTATION| fixAgent");
  const response = await grpcFixDbAgent(agentDb);
  logger.info(`Resolved response [${response}]`);
  return response;
};

export default {
  createDevice,
  updateDevice,
  removeDevice,
  startSimulation,
  stopSimulation,
  fixAgentDb,
};
