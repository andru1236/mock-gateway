import {mongoDb, ObjectId} from '../../data/mongoData.js';

const apiQueries = {
  api: async (parent, args) => {
    let apiData = mongoDb.getApis();

    if (apiData) {
      let apiId = args._id;
      let api = await apiData.findOne(ObjectId(apiId));
      return api;
    }
    else {
      return { status: 404, message : "error" };
    }
  },
  apis: async () => {
    let apiData = mongoDb.getApis();

    if (apiData) {
      let apis = await apiData.find({}).toArray();
      return apis;
    }
    else {
      return { status: 404, message : "error" };
    }
  }
};

export {apiQueries};