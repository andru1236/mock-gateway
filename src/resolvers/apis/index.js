import apiMutations  from "./mutations";
import apiQueries from './queries';
import dbTranslator from './dbTranslator';

const Api = {
  id: (obj) => obj[dbTranslator.id],
  name: (obj) => obj.name,
  port: (obj) => obj.port,
  routes: (obj) => obj.routes,
  settings: (obj) => {
    return {
      enabled: obj.settings.enabled,
      createdOn: obj.settings[dbTranslator.settings.createdOn]
    }
  },
};

export {
  Api,
  apiQueries,
  apiMutations
};