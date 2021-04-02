
const deviceMutation = `
    createDevice(name: String, port: Int, agentDB: String): Device
    updateDevice(deviceId: String!, name: String, port: Int, agentDB: String): Device
    removeDevice(deviceId: String): Boolean
    startSimulation(deviceId: String): Boolean
    stopSimulation(deviceId: String): Boolean
    fixAgentDb(agentDb: String): String
    transformToSnmpRec(agentDb: String): String
    transformToWalk(agentDb: String): String
`;

export default deviceMutation;