import { ServerData } from '../../data/serverData.js';
const serverData = new ServerData();

const responseMutations = {
  createResponse: (parent, args, context, info) => {
    return "Response created successfully!";
  }
};

export {responseMutations};