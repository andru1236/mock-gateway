import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const responseQueries = {
  response: (parent, args) => {
    let id = args._id;
    let responses = serverData.getResponseData();
    let res = responses.filter(response => {
      return response._id == id;
    })[0];
    
    return res;
  },
  responses: () => {
    return serverData.getResponseData();
  }
};

export {responseQueries};