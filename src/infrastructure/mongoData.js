import pkg from 'mongodb';
import readEnv from './readEnv';

readEnv();

const {MongoClient, ObjectId} = pkg;
const clientDb = await MongoClient.connect(process.env.MONGO_URL, {useUnifiedTopology: true});
const db = clientDb.db(process.env.MONGO_DB);

const mongoDb = {
    getApis : () => {
        return db.collection('apis');
    },
    getResponses : () => {
        return db.collection('responses');
    }
};

export {mongoDb, ObjectId};