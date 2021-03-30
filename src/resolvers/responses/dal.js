import { dbc, ObjectId, withErrorHandler, logger } from "../../infrastructure";

const searchAllResponses = async (limit = null) => {
  logger.debug(`Calling to db -> get all RESPONSES`);
  return limit
    ? await dbc.responses.find({}).limit(limit).toArray()
    : await dbc.responses.find({}).toArray();
};

const searchAResponse = async (responseIds) => {
  logger.debug(`Calling to db -> get one RESPONSE | param: ${responseIds}`);
  if (!Array.isArray(responseIds)) {
    responseIds = [responseIds];
  }

  const listObjectIds = responseIds.map((id) => ObjectId(id));
  return await dbc.responses.find({ _id: { $in: listObjectIds } }).toArray();
};

export default {
  searchAResponse: withErrorHandler(searchAResponse),
  searchAllResponses: withErrorHandler(searchAllResponses),
};
