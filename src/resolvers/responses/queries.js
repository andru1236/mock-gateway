import {mongoDb, ObjectId} from '../../data/mongoData.js';

const responseQueries = {
  response: async (parent, args) => {
    let responseId = args._id;
    let responseData = mongoDb.getResponses();

    if (responseData) {
      let res = await responseData.findOne(ObjectId(responseId));
      return res;
    }
    else {
      return { status: 404, message : "error" };
    }
  },
  responses: async () => {
    let responseData = mongoDb.getResponses();

    if (responseData) {
      let responses = await responseData.find({}).toArray();
      return responses;
    }
    else {
      return { status: 404, message : "error" };
    }
  }
};

export {responseQueries};