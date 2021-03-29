import DataLoader from 'dataloader';
import { dbc, ObjectId } from "../../infrastructure";

const getResponsesByApiIds = async (responseIds) => {
  const objIds = responseIds.map(function(id) {
    return ObjectId(id);
  });

  return await dbc.apis.find({ _id:{ $in: objIds }}).toArray();
};

export const responsesLoader = () => {
  return new DataLoader(ids => getResponsesByApiIds(ids));
};
