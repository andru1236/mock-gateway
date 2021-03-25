import dal from './dal';

const api = async (parent, args) => {
  return await dao.searchAnApi(args.id);
};

const apis = async () => await dal.searchAllApis();

export default {
  api,
  apis,
};
