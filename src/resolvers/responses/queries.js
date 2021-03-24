import dal from "./dal";

const response = async (parent, args) => {
  return await dal.searchAResponse(args.id);
};
const responses = async () => {
  return await dal.searchAllResponses();
};

export default { response, responses };
