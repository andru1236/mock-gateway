import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const apiMutations = {
  // create new api
  createAPI: async (parent, args, context, info) => {
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // create api data
    let res = await serverData.post(apiBody, 'apis');
    return (res.status == 201) ? "Api created successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // update api
  updateAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId;
    let apiBody = {
      name: args.name,
      port: args.port
    };
    // update api data
    let res = await serverData.put(apiBody, url);
    return (res.status == 200) ? "Api updated successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // remove api
  removeAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId;
    // remove api data
    let res = await serverData.delete({}, url);
    return (res.status == 200) ? "Api removed successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // start api
  startAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/start';
    let res = await serverData.post({}, url);
    return (res.status == 200) ? "Api started successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // stop api
  stopAPI: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/stop';
    let res = await serverData.post({}, url);
    return (res.status == 200) ? "Api stopped successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // create route
  createRoute: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes';
    let body = {
      path: args.path,
      method: args.method,
      response: args.response
    };

    let res = await serverData.post(body, url);
    return (res.status == 201) ? "Route created successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // update route
  updateRoute: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes';
    let body = {
      path: args.path,
      method: args.method,
      response: args.response
    };

    let res = await serverData.put(body, url);
    return (res.status == 200) ? "Route updated successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // remove route
  removeRoute: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes';
    let body = {
      path: args.path,
      method: args.method
    };

    let res = await serverData.delete(body, url);
    return (res.status == 200) ? "Route removed successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // create route params
  createRouteParams: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes/' + args.routeId + '/params';
    let body = {
      method: args.method,
      params: args.param,
      response: args.response
    };

    let res = await serverData.post(body, url);
    return (res.status == 201) ? "Route Param created successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // update route params
  updateRouteParams: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes/' + args.routeId + '/params';
    let body = {
      method: args.method,
      params: args.param,
      response: args.response
    };

    let res = await serverData.put(body, url);
    return (res.status == 200) ? "Route Param updated successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // remove route params
  removeRouteParams: async (parent, args, context, info) => {
    let url = 'apis/' + args.apiId + '/routes/' + args.routeId + '/params';
    let body = {
      method: args.method,
      params: args.param
    };

    let res = await serverData.delete(body, url);
    return (res.status == 200) ? "Route Param removed successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  }
};

export {apiMutations};