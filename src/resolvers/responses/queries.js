import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const responseQueries = {
  response: (parent, args) => {
    let id = args._id;
    let res = serverData.dataResponse.responses.filter(response => {
      return response._id == id;
    })[0];
    
    return res;
  },
  responses: () => {
    return serverData.dataResponse.responses;
  }
};

export {responseQueries};