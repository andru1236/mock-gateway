// Create all custom errors

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

export const errors = {
  DatabaseError,
  ResponseError,
  NoFoundError,
};
