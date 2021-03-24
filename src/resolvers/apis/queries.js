import { mongoDb, ObjectId } from "../../infrastructure/mongoData.js";

const api = async (parent, args) => {
  let apiData = mongoDb.getApis();

  if (apiData) {
    let apiId = args._id;
    let api = await apiData.findOne(ObjectId(apiId));
    return api;
  } else {
    return { status: 404, message: "error" };
  }
};

const apis = async () => {
  let apiData = mongoDb.getApis();

  if (apiData) {
    let apis = await apiData.find({}).toArray();
    return apis;
  } else {
    return { status: 404, message: "error" };
  }
};

export default {
  api,
  apis,
};
