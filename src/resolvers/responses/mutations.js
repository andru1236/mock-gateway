import { ServerData } from "../../infrastructure/serverData.js";

const serverData = new ServerData();

const createResponse = (parent, args, context, info) => {
  return "Response created successfully!";
};

export default { createResponse };
