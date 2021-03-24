import { dbc, ObjectId, withErrorHandler } from "../../infrastructure";

const searchAResponse = async (responseId) =>{
    return await dbc.responses.findOne(ObjectId(responseId));
};


const searchAllResponses = async (limit = null) => {
    return limit ? 
    await dbc.responses.find({}).limit(limit).toArray()
    :
    await dbc.responses.find({}).toArray();
}

export default {
    searchAResponse: withErrorHandler(searchAResponse),
    searchAllResponses: withErrorHandler(searchAllResponses)
}