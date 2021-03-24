import { ServerData } from "../../infrastructure/apiBridge";
const serverData = new ServerData();

const createAPI = async (parent, args, context, info) => {
  let apiBody = {
    name: args.name,
    port: args.port,
  };
  // create api data
  let res = await serverData.post(apiBody, "apis");
  return res.status == 201
    ? null
    : "Error " + res.status + " , Message : " + res.message;
};
const updateAPI = async (parent, args, context, info) => {
  let url = "apis/" + args.apiId;
  let apiBody = {
    name: args.name,
    port: args.port,
  };
  // update api data
  let res = await serverData.put(apiBody, url);
  return res.status == 200
    ? null
    : "Error " + res.status + " , Message : " + res.message;
};
const removeAPI = async (parent, args, context, info) => {
  let url = "apis/" + args.apiId;
  // remove api data
  let res = await serverData.deleteApiData(url);
  return res.status == 200
    ? null
    : "Error " + res.status + " , Message : " + res.message;
};
const createRoute = (parent, args, context, info) => {
  return "Route created successfully!";
};
const updateRoute = (parent, args, context, info) => {
  return "Route updated successfully!";
};
const removeRoute = (parent, args, context, info) => {
  return "Route removed successfully!";
};

export default {
  createAPI,
  updateAPI,
  removeAPI,
  createRoute,
  updateRoute,
  removeRoute,
};
