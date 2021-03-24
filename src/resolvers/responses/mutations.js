import { ServerData } from "../../infrastructure/apiBridge";

const serverData = new ServerData();

const createResponse = (parent, args, context, info) => {
  return "Response created successfully!";
};

export default { createResponse };
