import { ApolloError } from "apollo-server-errors";

class DatabaseError extends Error {
  constructor(message) {
    super(message);
  }
}

class ResponseError extends Error {
  constructor(message) {
    super(message);
  }
}

class NoFoundError extends Error {
  constructor(message) {
    super(message);
  }
}

class LegacyErrorSystem extends Error {
  constructor(message) {
    super(message);
  }
}

class LegacyBadRequestError extends Error {
  constructor(message) {
    super(message);
  }
}

class GatewayError extends ApolloError {
  constructor(message) {
    super(message, "GATEWAY_ERROR");
  }
}

class SimulatorError extends Error {
  constructor(message) {
    super(message, "SIMULATOR_ERRORS")
  }
}

export const errors = {
  DatabaseError,
  ResponseError,
  NoFoundError,
  LegacyErrorSystem,
  LegacyBadRequestError,
  GatewayError,
  SimulatorError
};
