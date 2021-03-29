import { dbc, ObjectId, withErrorHandler } from "../../infrastructure";
import { apisLoader } from "./dataLoader";
const apis = apisLoader();

const searchAllApis = async (limit = null) => {
  if (limit !== null) {
    return await dbc.apis.find({}).limit(limit).toArray();
  }
  return await dbc.apis.find({}).toArray();
};

const searchAnApi = async (apiId) => {
  const res = await apis.load(apiId);
  if (!res) {
    res = await searchApiObject(apiId);
    responsesLoader.prime(apiId, res);
  }

  return res;
};

const searchApiObject = async (apiId) =>{
  return await dbc.apis.findOne(ObjectId(apiId))
};

export default {
  searchAllApis: withErrorHandler(searchAllApis),
  searchAnApi: withErrorHandler(searchAnApi)
}
