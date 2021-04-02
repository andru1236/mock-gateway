import { gql } from "apollo-server-express";

import deviceMutations from './mutations';
import deviceQueries from './queries';

const DeviceType = gql`
  type Device {
    id: String
    name: String
    port: Int
    isRunning: Boolean
    agentDb: String
  }
`;

export { DeviceType, deviceMutations, deviceQueries };
