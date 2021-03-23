import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const responseMutations = {
  // create response
  createResponse: async (parent, args, context, info) => {
    let body = {
      name: args.name,
      response: args.response
    };
    // create response data
    let res = await serverData.post(body, 'responses');
    return (res.status == 201) ? "Response created successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  //update response
  updateResponse: async (parent, args, context, info) => {
    const url = `responses/${args.responseId}`;
    let body = {
      name: args.name,
      response: args.response
    };
    // update response data
    let res = await serverData.put(body, url);
    return (res.status == 200) ? "Response updated successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // remove response
  removeResponse: async (parent, args, context, info) => {
    const url = `responses/${args.responseId}`;
    // remove response data
    let res = await serverData.delete({}, url);
    return (res.status == 200) ? "Response removed successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  },
  // assign response to api
  assignResponseToApi: async (parent, args, context, info) => {
    const url = `responses/${args.responseId}`;
    let body = {
      api_id: args.apiId,
      path: args.path,
      method: args.method
    };
    // assign response to api
    let res = await serverData.post(body, url);
    return (res.status == 200) ? "Response assigned to Api successfully!" : 
      "Error " + res.status + " , Message : " + res.message;
  }
};

export {responseMutations};