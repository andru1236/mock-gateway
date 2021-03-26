import pkg from "mongodb";
import readEnv from "./readEnv";

readEnv();
const { MongoClient, ObjectId } = pkg;

const connection = await MongoClient.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

const db = connection.db(process.env.MONGO_DB);

const dbc = {
  apis: db.collection("apis"),
  responses: db.collection("responses"),
};

export { dbc, ObjectId };
