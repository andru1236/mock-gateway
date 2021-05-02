import pkg from "mongodb";
import readEnv from "./readEnv";

readEnv();
const { MongoClient, ObjectId } = pkg;

const connection = await MongoClient.connect(process.env.MONGO_CONNECTION, {
  useUnifiedTopology: true,
});

const db = connection.db(process.env.MONGO_DB);

const dbc = {
  apis: db.collection(process.env.COLLECTION_API || "apis"),
  responses: db.collection(process.env.COLLECTION_RESPONSE || "responses"),
  devices: db.collection(process.env.COLLECTION_DEVICE || "devices")
};

export { dbc, ObjectId };
