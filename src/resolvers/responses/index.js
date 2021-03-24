import { logger } from "../../infrastructure";
import responseMutations from "./mutations";
import responseQueries from "./queries";
import dbTranslator from "./dbTranslator";
import dal from "../apis/dal";

const Response = {
  id: (obj) => obj[dbTranslator.response.id],
  name: (obj) => obj.name,
  response: (obj) => obj.response,
  trackingAssignation: async (obj) => {
    const trackingList = obj[dbTranslator.response.trackingAssignation];
    const resolvedApis = await Promise.all(
        trackingList.map(async (track) => {

        const iteratorApi = await dal.searchAnApi(
          track[dbTranslator.trackingAssignation.apiId]
        );

        return {
          ...track,
          api: iteratorApi,
        };

      })
    );

    console.log(resolvedApis);
    console.log(resolvedApis[0].routes);
    return resolvedApis;
  },
  createdOn: (obj) => obj[dbTranslator.createdOn],
};

export { Response, responseMutations, responseQueries };
