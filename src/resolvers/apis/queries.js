import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiQueries = {
  api: (parent, args) => {
    return serverData.getApiById(args._id);
  },
  apis: () => {
    return serverData.getApiData();
  }
};

export {apiQueries};