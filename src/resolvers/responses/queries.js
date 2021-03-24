import { dbc, ObjectId } from "../../infrastructure";

const response = async (parent, args) => {
    return await dbc.apis.findOne(ObjectId(args.id));
};
const responses = async () => {
    return await dbc.resonses.find({}).toArray();
};

export default { response, responses };
