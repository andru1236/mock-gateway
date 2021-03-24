import { dbc, ObjectId } from "../../infrastructure";

const api = async (parent, args) => {
  let apiData = dbc.apis();
  const api = await dbc.findOne(ObjectId(args.id))
  return api
};

const apis = async () => {
  return await dbc.apis.find({}).toArray();
  
};

export default {
  api,
  apis,
};
