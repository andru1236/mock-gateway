import grpc from "grpc";
import readEnv from "../readEnv";
import { grpc_services } from "./client_grpc";
import { logger } from "../logger";

readEnv();

const PROTOCOL_BUFFER_SERVER = process.env.PROTOCOL_BUFFER_SERVER;

export const client_for_simulator = new grpc_services.Simulator(
  PROTOCOL_BUFFER_SERVER,
  grpc.credentials.createInsecure()
);

export const grpcStartSimulation = (id) => {
  return new Promise((resolve, reject) => {
    client_for_simulator.startDeviceSimulation({ id }, (err, grpcResponse) => {
      if (err) {
        logger.error("Problems to start simulation");
        resolve(false);
      }
      logger.debug(`Response: ${JSON.stringify(grpcResponse)}`);
      return grpcResponse?.sucessfull
        ? resolve(grpcResponse.sucessfull)
        : resolve(false);
    });
  });
};

export const grpcStopSimulation = async (id) => {
  return new Promise((resolve, reject) => {
    client_for_simulator.stopDeviceSimulation({ id }, (err, grpcResponse) => {
      if (err) {
        logger.error("Problems to stop simulation");
        resolve(false);
      }
      logger.debug(`Response: ${JSON.stringify(grpcResponse)}`);
      return grpcResponse?.sucessfull
        ? resolve(grpcResponse.sucessfull)
        : resolve(false);
    });
  });
};

export const grpcFixDbAgent = async (dbAgent) => {
  return new Promise((resolve, reject) => {
    client_for_simulator.fixDbAgent({ dbAgent }, (error, response) => {
      if (error) {
        logger.error("Problems to fix the db Agent simulation");
        reject(dbAgent);
      }
      logger.debug(`No errors`);
      response?.dbAgent ? resolve(response.dbAgent): reject(dbAgent);
    });
  });
};
