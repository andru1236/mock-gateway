import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiMutations = {
  createAPI: async (parent, args, context, info) => {
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // create api data
    return await serverData.postApiData(apiBody);
  },
  updateAPI: async (parent, args, context, info) => {
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // update api data
    return await serverData.putApiData(args.apiId, apiBody);
  },
  removeAPI: async (parent, args, context, info) => {
    // remove api data
    return await serverData.deleteApiData(args.apiId);
  },
  createRoute: (parent, args, context, info) => {
    return "Route created successfully!";
  },
  updateRoute: (parent, args, context, info) => {
    return "Route updated successfully!";
  },
  removeRoute: (parent, args, context, info) => {
    return "Route removed successfully!";
  }
};

export {apiMutations};