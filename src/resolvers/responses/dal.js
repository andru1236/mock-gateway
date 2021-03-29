import { dbc, ObjectId, withErrorHandler } from "../../infrastructure";
import { responsesLoader } from './dataLoader';
const responses = responsesLoader();

const searchAllResponses = async (limit = null) => {
  return limit ? 
  await dbc.responses.find({}).limit(limit).toArray()
  :
  await dbc.responses.find({}).toArray();
}

const searchAResponse = async (responseId) =>{
  const res = await responses.load(responseId);
  if (!res) {
    res = await searchResponseObject(responseId);
    responsesLoader.prime(responseId, res);
  }

  return res;
};

const searchResponseObject = async (responseId) =>{
  return await dbc.responses.findOne(ObjectId(responseId));
};

export default {
  searchAResponse: withErrorHandler(searchAResponse),
  searchAllResponses: withErrorHandler(searchAllResponses)
}
