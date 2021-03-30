import DataLoader from 'dataloader';
import { dbc, ObjectId } from "../../infrastructure";

const getApisByApiIds = async (apiIds) => {
  const objIds = apiIds.map(function(id) {
    return ObjectId(id);
  });

  return await dbc.apis.find({ _id:{ $in: objIds }}).toArray();
};

export const apisLoader = () => {
  return new DataLoader(ids => getApisByApiIds(ids));
};
