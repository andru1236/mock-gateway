import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiMutations = {
  createAPI: async (parent, args, context, info) => {
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // create api data
    let res = await serverData.post(apiBody, 'apis');
    return (res.status == 201) ? null : 
      "Error " + res.status + " , Message : " + res.message;
  },
  updateAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId;
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // update api data
    let res = await serverData.put(apiBody, url);
    return (res.status == 200) ? null : 
      "Error " + res.status + " , Message : " + res.message;
  },
  removeAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId;
    // remove api data
    let res = await serverData.deleteApiData(url);
    return (res.status == 200) ? null : 
      "Error " + res.status + " , Message : " + res.message;
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