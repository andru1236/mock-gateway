import { dbc, ObjectId, withErrorHandler } from "../../infrastructure";

const searchAllApis = async (limit = null) => {
  if (limit !== null) {
    return await dbc.apis.find({}).limit(limit).toArray()
  }
  return await dbc.apis.find({}).toArray();
};

const searchAnApi = async (apiId) =>{
  return await dbc.apis.findOne(ObjectId(apiId))
};

export default {
  searchAllApis: withErrorHandler(searchAllApis),
  searchAnApi: withErrorHandler(searchAnApi)
}
