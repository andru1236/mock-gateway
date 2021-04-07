import { logger, dbc, ObjectId, withErrorHandler } from "../../infrastructure";

const saveDevice = async (name, port, agentDb) => {
  logger.info("Inserting new device in the db");
  const devObj = {
    name,
    port,
    agentDb,
    isRunning: false,
  };
  await dbc.devices.insertOne(devObj);
};

const updateDevice = async (
  deviceId,
  name,
  port,
  agentDb,
  isRunning = false
) => {
  logger.info(`Database Updating device: [${deviceId}]`);
  const devObj = {
    name,
    port,
    agentDb,
    isRunning,
  };
  await dbc.devices.updateOne({ _id: ObjectId(deviceId) }, { $set: devObj });
};

const removeDevice = async (deviceId) => {
  logger.info(`Database Removing device: [${deviceId}]`);
  await dbc.devices.deleteOne({ _id: ObjectId(deviceId) });
  return true;
};

const searchOneDevice = async (deviceId) => {
  logger.info(`Database calling searchOneDevice: [${deviceId}]`);
  if (!Array.isArray(deviceId)) {
    deviceId = [deviceId];
  }
  const listObjIds = deviceId.map((id) => ObjectId(id));
  return await dbc.devices.find({ _id: { $in: listObjIds } }).toArray();
};

const searchAllDevices = async (limit = null) => {
  logger.info(`Database calling searchAllDevice`);
  if (limit) {
    return await dbc.devices.find({}).limit(limit);
  }
  return await dbc.devices.find({}).toArray();
};

export default {
  saveDevice: withErrorHandler(saveDevice),
  updateDevice: withErrorHandler(updateDevice),
  removeDevice: withErrorHandler(removeDevice),
  searchOneDevice: withErrorHandler(searchOneDevice),
  searchAllDevices: withErrorHandler(searchAllDevices),
};
