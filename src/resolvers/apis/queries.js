import { dbc, ObjectId } from "../../infrastructure";

const api = async (parent, args) => await dbc.apis.findOne(ObjectId(args.id));

const apis = async () => await dbc.apis.find({}).toArray();

export default {
  api,
  apis,
};
