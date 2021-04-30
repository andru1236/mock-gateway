import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";
import { logger } from "../logger";

// The file is generated for the backend, this client just should copy the proto and build it
const PROTO_PATH = `${process.cwd()}/src/infrastructure/protocol_buffer/protos/simulator_services.proto`;
logger.info(`loading file: ${PROTO_PATH}`);

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
logger.info(`The gRPC client classes was created successfull`);

export const grpc_services = grpc.loadPackageDefinition(packageDefinition);
