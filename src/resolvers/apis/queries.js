import dao from './dao';

const api = async (parent, args) => {
  return await dao.searchAnApi(args.id);
};

const apis = async () => await dao.searchAllApis();

export default {
  api,
  apis,
};
