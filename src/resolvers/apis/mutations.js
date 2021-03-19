import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiMutations = {
  createAPI: (parent, args, context, info) => {
    return "Api created successfully!";
  },
  updateAPI: (parent, args, context, info) => {
    return "Api updated successfully!";
  },
  removeAPI: (parent, args, context, info) => {
    return "Api removed successfully!";
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