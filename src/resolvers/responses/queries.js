import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const responseQueries = {
  response: (parent, args) => {
    return serverData.getResponseById(args._id);
  },
  responses: () => {
    return serverData.getResponseData();
  }
};

export {responseQueries};