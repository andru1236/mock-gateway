import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiQueries = {
  api: (parent, args) => {
    let id = args._id;
    let apis = serverData.getApiData();
    let res = apis.filter(api => {
      return api._id == id;
    })[0];

    return res;
  },
  apis: () => {
    return serverData.getApiData();
  }
};

export {apiQueries};