const deviceMutation = `
    createDevice(name: String, port: Int, agentDb: String): Boolean
    updateDevice(deviceId: String!, name: String, port: Int, agentDb: String): Boolean
    removeDevice(deviceId: String): Boolean
    startSimulation(deviceId: String): Boolean
    stopSimulation(deviceId: String): Boolean
    fixAgentDb(agentDb: String): String
    transformToSnmpRec(agentDb: String): String
    transformToWalk(agentDb: String): String
`;

export default deviceMutation;