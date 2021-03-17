import {ServerData} from '../server/serverData.js';
import {GraphQLJSON} from 'graphql-type-json';
const serverData = new ServerData();

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    api: (parent, args) => {
      let id = args._id;
      let res = serverData.dataApi.apis.filter(api => {
        return api._id == id;
      })[0];

      return res;
    },
    apis: () => {
      return serverData.dataApi.apis;
    },
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
  }
};

export {resolvers};