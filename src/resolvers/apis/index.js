import apiMutations from "./mutations";
import apiQueries from "./queries";
import dbTranslator from "./dbTranslator";
import apisLoader from "./dataLoader";

const Api = {
  id: (obj) => obj[dbTranslator.id],
  name: (obj) => obj.name,
  port: (obj) => obj.port,
  routes: (obj) => {
    return obj.routes.map(route => {
      return {
        id: route[dbTranslator.routes.id],
        path: route.path,
        resources: route.resources
      }
    });
  },
  settings: (obj) => {
    return {
      enabled: obj.settings.enabled,
      createdOn: obj.settings[dbTranslator.settings.createdOn],
    };
  },
};

export { Api, apiQueries, apiMutations, apisLoader };
