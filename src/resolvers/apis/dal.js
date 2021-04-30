import { dbc, ObjectId, withErrorHandler, logger } from "../../infrastructure";

const searchAllApis = async (limit = null, next = 0) => {
  logger.debug(`Calling to db -> get all apis`);
  if (limit !== null) {
    return await dbc.apis.find({})
      .skip(next)
      .limit(limit)
      .toArray();
  }
  return await dbc.apis.find({}).toArray();
};

const searchAnApi = async (apiIds) => {
  logger.debug(`Calling to db -> Get api: ${apiIds}`);
  if (!Array.isArray(apiIds)) {
    apiIds = [apiIds];
  }

  const listObjectIds = apiIds.map((id) => ObjectId(id));
  return await dbc.apis.find({ _id: { $in: listObjectIds } }).toArray();
};

const countApis = async () => await dbc.apis.countDocuments({});


export default {
  searchAllApis: withErrorHandler(searchAllApis),
  searchAnApi: withErrorHandler(searchAnApi),
  countApis: withErrorHandler(countApis),
};
