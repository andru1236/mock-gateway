import { dbc, ObjectId, withErrorHandler } from "../../infrastructure";

const searchAllResponses = async (limit = null) => {
  return limit
    ? await dbc.responses.find({}).limit(limit).toArray()
    : await dbc.responses.find({}).toArray();
};

const searchAResponse = async (responseId) => {
  return await dbc.responses.findOne(ObjectId(responseId));
};

export default {
  searchAResponse: withErrorHandler(searchAResponse),
  searchAllResponses: withErrorHandler(searchAllResponses),
};
